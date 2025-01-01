/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import { options } from "../utilities/chartOptions";
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

const defaultData = {
  labels: [],
  datasets: [
    {
      label: "Default Label",
      data: [],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      pointRadius: 0,
    },
  ],
};

const DrawChart = ({ chartData }) => {
  return <Line data={chartData || defaultData} options={options} />;
};

export default DrawChart;
