import { useState } from "react";
import steamApi from "../api/api";
import { useEffect } from "react";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
  const [data, setData] = useState(new Map());

  useEffect(() => {
    const fetchData = async () => {
      const response = await steamApi.get("/api/data");
      const datapointMap = retrieveXYaxis(response.data)
      console.log(datapointMap)
      setData(datapointMap);
    };
    fetchData();
  }, []);

  const retrieveXYaxis = (data) => {
    const datapointMap = new Map()
    //[[a,b,c],[a,b,c],[a,b,c],[a,b,c]]
    for(let datapoint of data){
      const [time, price, sales] = datapoint
      let currTimes = datapointMap.get("times") 
      let currPrices = datapointMap.get("prices")
      let currTotalSales = datapointMap.get("totalSales")
      currTimes?currTimes.push(time):currTimes=[time]
      currPrices?currPrices.push(price):currPrices=[price]
      currTotalSales?currTotalSales.push(sales):currTotalSales=[sales]
      
      datapointMap.set("times", currTimes)
      datapointMap.set("prices", currPrices)
      datapointMap.set("totalSales", currTotalSales)
    }
    /*output:
      times:
      prices:
      totalSales:
    */
   return datapointMap
  }

  const chartData = {
    labels: data.timestamps || [], // Assuming data.timestamps is an array of timestamps
    datasets: [
      {
        label: 'Data over Time',
        data: data.values || [], // Assuming data.values is an array of values corresponding to the timestamps
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <>
    
      <Line data={chartData} />
    </>
  );
}

export default App;
