import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const options = {
  scales: {
    y: {
      title: {
        display: true,
        text: "Your Title",
        font: {
          size: 15,
        },
      },
    },
    x: {
      title: {
        display: true,
        text: "Your Title",
        font: {
          size: 15,
        },
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
      font: {
        size: 30,
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function BarChart() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
