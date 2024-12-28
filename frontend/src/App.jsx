import { useMemo, useState } from "react";
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

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetchData(search);
    }
  };

  const fetchData = async (searchVal) => {
    const response = await steamApi.get(`/api/data/${searchVal}`);
    const datapointMap = retrieveXYaxis(response.data);
    console.log(datapointMap);
    datapointMap.set("name", searchVal);
    setData(datapointMap);
  };

  //draw out the chart only when search
  const chartData = useMemo(
    () => ({
      labels: data.get("timestamps") || [],
      datasets: [
        {
          label: `${data.get("name")} Prices`,
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
      <div className="mx-5 my-2">Earliest Recorded Date:</div>
      <div className="mx-5 my-2">Lowest Price Date:</div>
      <div className="mx-5 my-2">Time taken to reach lowest Price:</div>
    </>
  );
}

export default App;
