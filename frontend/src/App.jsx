import { useMemo, useState } from "react";
import steamApi from "../api/api";
import { retrieveXYaxis } from "./services/retrieveXYaxis";

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

  const fetchData = async (val) => {
    const response = await steamApi.get(`/api/data/${val}`);
    const datapointMap = retrieveXYaxis(response.data);
    console.log(datapointMap);
    setData(datapointMap);
  };

  //draw out the chart only when search
  const chartData = useMemo(
    () => ({
      labels: data.get("timestamps") || [],
      datasets: [
        {
          label: `${search}`,
          data: data.get("prices") || [],
          fill: false,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
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
      <Line data={chartData} />
    </>
  );
}

export default App;
