import React, { useState } from "react";
import styles from "../../styles/stylesGenerales.module.css"; 
import { Toaster, toast } from "sonner";

const Periodos = ({navegacion,onhandleRegistrarPeriodo}) => {
  const [periodos, setPeriodos] = useState([
    { numero: 20251,modalidad:"Anuel", estado: "Activo" },
    { numero: 20242,modalidad:"Anuel", estado: "Inactivo" },
    { numero: 20243,modalidad:"Anuel", estado: "Activo" },
    { numero: 20252,modalidad:"Anuel", estado: "Activo" },
    { numero: 20241,modalidad:"Anuel", estado: "Inactivo" },
    { numero: 20253,modalidad:"Anuel", estado: "Activo" },
    { numero: 20261,modalidad:"Anuel", estado: "Activo" },
    { numero: 20262,modalidad:"Anuel", estado: "Inactivo" },
    { numero: 20263,modalidad:"Anuel", estado: "Activo" },
    { numero: 20271,modalidad:"Anuel", estado: "Activo" }
  ]);

  const [numeroBuscado, setNumeroBuscado] = useState("");
  const [resultados, setResultados] = useState(periodos);

  const cambiarEstado = (numero) => {
    const nuevosPeriodos = periodos.map((periodo) =>
      periodo.numero === numero
        ? {
            ...periodo,
            estado: periodo.estado === "Activo" ? "Inactivo" : "Activo",
          }
        : periodo
    );

    setPeriodos(nuevosPeriodos);

    if (numeroBuscado) {
      const resultadosFiltrados = nuevosPeriodos.filter(
        (periodo) => periodo.numero === parseInt(numeroBuscado)
      );
      setResultados(resultadosFiltrados);
    } else {
      setResultados(nuevosPeriodos);
    }
  };

  const buscarPeriodo = (e) => {
    e.preventDefault();
    const numero = parseInt(numeroBuscado);
    if (!isNaN(numero)) {
      const resultadosFiltrados = periodos.filter(
        (periodo) => periodo.numero === numero
      );
      setResultados(resultadosFiltrados);
    } else {
      setResultados(periodos);
    }
  };

  return (
    <div className={styles.tablaContainer}>
            <h1 className={styles.titulo}>Crear periodo</h1>
            <div className={styles.containerFilter}> 
              <form className={styles.formulario} onSubmit={buscarPeriodo} >
                
               <div className={styles.button_group}>
                    <input className={styles.containerInput} 
                      type="number" 
                      value={numeroBuscado}
                      onChange={(e) => setNumeroBuscado(e.target.value)}
                      placeholder="Buscar por periodo"
                    />
                    <button className={styles.periodoButton}>Buscar</button>
                    <button className={styles.periodoButton} onClick={onhandleRegistrarPeriodo} >Rgst. Periodo</button>
               </div>
              </form>

            </div>
      <table className={styles.styledTable}>
        <thead>
          <tr className={styles.tr}>
            <th>Periodo</th>
            <th>Modalidad</th>
            <th>Estatus</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {resultados.map((periodo, index) => (
            <tr className={styles.tr} key={index}>
              <td data-titulo="Periodo" className={`${styles.td} ${styles.periodos}`}><p className={styles.p}>{periodo.numero}</p></td>
              <td data-titulo="Modalidad" className={styles.td}><p className={styles.p}>{periodo.modalidad}</p></td>
              <td data-titulo="Estatus" className={styles.td}><p className={periodo.estado === "Activo" ? styles.bgActivo : styles.bgInactivo}>{periodo.estado}</p>
              </td>
              <td data-titulo="Acciones" className={` ${styles.td} ${styles.button_group}`}>
                <button
                  onClick={() => cambiarEstado(periodo.numero)}
                  className={ styles.periodoButton
                  }
                >
                  Cambiar Estado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster richColors visibleToasts="1" position="top-right" />
      <div className={styles.Universal}>
      <div className={styles.tabla_mobile}>
        <div className={styles.fila}>
          <div className={styles.columna}>
            <div className={styles.header}>Periodo</div>
            <div className={styles.contenido}>2025-I</div>
          </div>
          <div className={styles.columna}>
            <div className={styles.header}>Status</div>
            <div className={styles.contenido}>Activo</div>
          </div>
          <div className={styles.columna}>
            <div className={styles.header}>Acciones</div>
            <div className={styles.button_group}>
            <button className={styles.periodoButton}>
              Cambiar estado
            </button>
            <button className={styles.periodoButton}>
              Eliminar
            </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Periodos;
