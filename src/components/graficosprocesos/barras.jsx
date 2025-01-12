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

function Barras() {
  const estexist = [772, 200, 300, 500, 600];
  const estinsc = [400, 50, 20, 30, 20];

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
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Barras;
