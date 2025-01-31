import styles from "./css/graficos.module.css";
import Barras from "./barras";

function Graficos() {
  return (
    <div id="chart" className={styles.containerItems}>
      <div className={styles.items0}>
        <h1>Reporte de Inscripciones</h1>
      </div>

      <div className={styles.items1}>
        <Barras />
      </div>
    </div>
  );
}

export default Graficos;
