import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);
import { Doughnut } from "react-chartjs-2";

function Donas() {
  const estexist = [772, 200, 300, 500, 600];
  const estinsc = [400, 50, 20, 30, 20];
  const titles = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const labels = ["Existentes", "Inscriptos", "Faltantes"];
  const backgroundColor = ["gray", "blue", "cyan"];
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
      },
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "#add8e6",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      {datasets.map((data, index) => (
        <div
          key={index}
          style={{
            margin: "20px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <Doughnut
            data={data}
            options={options(titles[index])}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  );
}

export default Donas;
