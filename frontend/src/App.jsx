import { useState } from "react";
import steamApi from "../api/api";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [data, setData] = useState(new Map());

  const fetchData = async (val) => {
    const response = await steamApi.get(`/api/data/${val}`);
    const datapointMap = retrieveXYaxis(response.data);
    console.log(datapointMap);
    setData(datapointMap);
  };

  //this function populates the map
  const retrieveXYaxis = (data) => {
    const datapointMap = new Map();
    for (let datapoint of data) {
      const [time, price, sales] = datapoint;
      let currTimestamps = datapointMap.get("timestamps");
      let currPrices = datapointMap.get("prices");
      let currTotalSales = datapointMap.get("totalSales");
      currTimestamps ? currTimestamps.push(time) : (currTimestamps = [time]);
      currPrices ? currPrices.push(price) : (currPrices = [price]);
      currTotalSales ? currTotalSales.push(sales) : (currTotalSales = [sales]);

      datapointMap.set("timestamps", currTimestamps);
      datapointMap.set("prices", currPrices);
      datapointMap.set("totalSales", currTotalSales);
    }

    return datapointMap;
  };

  //draw out the chart
  const chartData = {
    labels: data.get("timestamps") || [],
    datasets: [
      {
        label: "Fracture Case",
        data: data.get("prices") || [],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <>
      <button
        className="btn btn-primary m-2"
        onClick={() => fetchData("cs20-case")}
      >
        Log Data
      </button>
      <Line data={chartData} />
    </>
  );
}

export default App;
