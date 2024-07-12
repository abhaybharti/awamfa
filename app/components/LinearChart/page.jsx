"use client";
import React from "react";
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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   interaction: {
//     mode: "index" as const,
//     intersect: false,
//   },
//   stacked: false,
//   plugins: {
//     title: {
//       display: true,
//       text: "Chart.js Line Chart - Multi Axis",
//     },
//   },
//   scales: {
//     y: {
//       type: "linear" as const,
//       display: true,
//       position: "left" as const,
//     },
//     y1: {
//       type: "linear" as const,
//       display: true,
//       position: "right" as const,
//       grid: {
//         drawOnChartArea: false,
//       },
//     },
//   },
// };

const LinearChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart Title",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        data: [40, 50, 80, 54, 64, 74, 54],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        // yAxisID: "y",
      },
      {
        label: "Dataset 2",
        // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        data: [30, 40, 20, 34, 24, 44, 14],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        // yAxisID: "y1",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LinearChart;
