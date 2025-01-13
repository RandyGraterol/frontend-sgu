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

import sourcedata from "../graficos/sourcedata";
import "./barras.css";

function Barras() {
  const estexist = sourcedata.map((sourcedata) => sourcedata.estexit);
  const estinsc = sourcedata.map((sourcedata) => sourcedata.estinsc);

  const data = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
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
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div className="barras">
      <Bar data={data} options={options} />
    </div>
  );
}

export default Barras;
