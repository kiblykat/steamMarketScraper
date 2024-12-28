export const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: "Date",
        color: "red",
        font: {
          size: 16,
        },
      },
      grid: {
        display: true,
        color: "rgba(200, 200, 200, 0.2)",
      },
      ticks: {
        maxTicksLimit: 10, // number of divisions on graph
      },
    },
    y: {
      title: {
        display: true,
        text: "Price",
        color: "red",
        font: {
          size: 16,
        },
      },
      ticks: {
        maxTicksLimit: 10, // number of divisions on graph
      },
      grid: {
        display: true,
        color: "rgba(200, 200, 200, 0.2)",
      },
    },
  },
};
