import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, Title);
import { Doughnut } from "react-chartjs-2";
import sourcedata from "../graficos/sourcedata";
import "./donas.css";

function Donas() {
  const estexist = sourcedata.map((sourcedata) => sourcedata.estexit);
  const estinsc = sourcedata.map((sourcedata) => sourcedata.estinsc);
  const titles = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const labels = ["Existentes", "Inscriptos", "Faltantes"];
  const backgroundColor = ["#87ceeb", "#6495ed", "#b2bec3"];
  const borderColor = ["black"];

  const datasets = estexist.map((ex, index) => ({
    labels,
    datasets: [
      {
        label: "Estudiantes",
        data: [ex, estinsc[index], ex - estinsc[index]],
        backgroundColor,
        borderColor,
      },
    ],
  }));

  const options = (title) => ({
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          size: 12,
        },
      },
      legend: {
        display: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderColor: "black",
        flexWrap: "wrap",
        padding: "20px",
        borderRadius: "15px",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {datasets.map((data, index) => (
        <div key={index} className="donas">
          <Doughnut data={data} options={options(titles[index])} />
        </div>
      ))}
    </div>
  );
}

export default Donas;
