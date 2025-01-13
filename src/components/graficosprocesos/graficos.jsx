import Donas from "./donas";
import Barras from "./barras";
import "./graficos.css";
function Graficos() {
  return (
    <div className="container-items">
      <div>
        <h1>Reporte de Inscripciones Estadisticas</h1>
      </div>

      <div className="items1">
        <Barras />
      </div>

      <div className="items2">
        <Donas />
      </div>
    </div>
  );
}

export default Graficos;
