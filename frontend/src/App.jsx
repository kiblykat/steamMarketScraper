import { useEffect, useMemo, useState } from "react";
import steamApi from "../api/api";
import { retrieveXYaxis } from "./services/retrieveXYaxis";
import { options } from "./utilities/chartOptions";

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
import axios from "axios";

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
  const [search, setSearch] = useState("");
  const [analyzedMarketData, setAnalyzedMarketData] = useState([]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetchData(search);
    }
  };

  const fetchData = async (searchVal) => {
    const response = await steamApi.get(`/api/data/${searchVal}`);
    const datapointMap = retrieveXYaxis(response.data);
    console.log(datapointMap);
    datapointMap.set("itemName", searchVal);
    setData(datapointMap);
  };

  //draw out the chart only when search
  const chartData = useMemo(
    () => ({
      labels: data.get("timestamps") || [],
      datasets: [
        {
          label: `${data.get("itemName")} Prices`,
          data: data.get("prices") || [],
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          pointRadius: 0,
        },
      ],
    }),
    [data]
  );

  const marketData = useMemo(
    //[names, prices, quantities]

    () => ({
      labels: analyzedMarketData[2] || [], //x-axis
      datasets: [
        {
          label: "Market Prices",
          data: analyzedMarketData[1] || [], //y-axis
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          pointRadius: 0,
        },
      ],
    }),
    [analyzedMarketData]
  );

  useEffect(() => {
    const analyzePriceMarketData = async () => {
      //response: [names, prices, quantities]
      const response = await axios.get(
        "http://localhost:3001/api/data/analyze-price-market"
      );
      setAnalyzedMarketData(response.data);
      console.log(response);
      return response;
    };
    analyzePriceMarketData();
  }, []);

  const timestamps = data.get("timestamps") || [];
  const earliestRecordedDate = new Date(timestamps[0]);
  const prices = data.get("prices") || [];
  const minPrice = Math.min(...prices);
  const minPriceIndex = prices.indexOf(minPrice);
  console.log(`minPriceIndex: ${minPriceIndex}`);
  const minPriceDate = new Date(timestamps[minPriceIndex]);
  const timeTakenToMinPrice = new Date(minPriceDate - earliestRecordedDate); //returns difference in ms

  //find the 800% date AFTER minimum price reached
  const indexWhenPriceReached800Percent =
    prices.slice(minPriceIndex).findIndex((price) => price >= minPrice * 8) +
    minPriceIndex;
  const dateWhenPriceReached800Percent = new Date(
    timestamps[indexWhenPriceReached800Percent]
  );
  let timeTakenFromMinPriceTo800Percent = new Date(
    dateWhenPriceReached800Percent - minPriceDate
  );

  return (
    <>
      <input
        className="input input-bordered"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onKeyDown={handleEnter}
      ></input>
      <button className="btn btn-primary m-2" onClick={() => fetchData(search)}>
        Log Data
      </button>
      <div className="divider"></div>
      <div className="container mx-auto p-4">
        <div className="w-full h-96">
          <Line data={chartData} options={options} />
        </div>
      </div>
      <div className="mx-5 my-2">
        Earliest Recorded Date: {earliestRecordedDate.toDateString()}
      </div>
      <div className="mx-5 my-2">Days in market: {timestamps.length} days</div>
      <div className="mx-5 my-2">Minimum Price: {minPrice}</div>
      <div className="mx-5 my-2">
        Minimum Price Date: {minPriceDate.toDateString()}
      </div>
      <div className="mx-5 my-2">
        Time taken to reach minimum Price:
        {timeTakenToMinPrice / (1000 * 60 * 60 * 24)} days
      </div>
      <div className="mx-5 my-2">Time hovering at minimum price:</div>
      <div className="mx-5 my-2">
        Time from minimum price to 800% increase from min price:{" "}
        {timeTakenFromMinPriceTo800Percent / (1000 * 60 * 60 * 24)} days
      </div>
      <div className="mx-5 my-2">
        Date when reached 800% increase from min price:{" "}
        {dateWhenPriceReached800Percent.toDateString()}
      </div>
      <div className="mx-5 my-2">Date case was discontinued:</div>
      <div className="container mx-auto p-4">
        <div className="w-full h-96">
          <Line data={marketData} />
        </div>
      </div>
    </>
  );
}

export default App;
