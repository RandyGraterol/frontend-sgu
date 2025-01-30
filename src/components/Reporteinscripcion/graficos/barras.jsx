import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import sourcedata from "./datos/sourcedata";
import styles from "./css/barras.module.css";

function Barras() {
  const estexist = sourcedata.map((sourcedata) => sourcedata.estexit);
  const estinsc = sourcedata.map((sourcedata) => sourcedata.estinsc);

  const data = {
    labels: sourcedata.map((sourcedata) => sourcedata.label),
    datasets: [
      {
        label: "Estudiantes Existentes",
        data: estexist,
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Estudiantes Inscriptos",
        data: estinsc,
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Estudiantes Faltantes",
        data: estexist.map((ex, index) => ex - estinsc[index]),
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Estudiantes por dia",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let dataLabel = context.dataset.label || "";
            if (dataLabel) {
              dataLabel += ": ";
            }
            const value = context.raw;
            const total = estexist[context.dataIndex];
            const percentage = ((value / total) * 100).toFixed(2);
            return `${dataLabel}${percentage}% (${value})`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        max: Math.max(...estexist),
        ticks: {
          stepSize: Math.max(...estexist) / 4,
          callback: (value) =>
            `${((value / Math.max(...estexist)) * 100).toFixed(2)}%`,
        },
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <div className={styles.barras}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Barras;
