import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faLayerGroup,
  faMinus,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Submit from "../../particulas/SubmitButtons/Submit.jsx";
import useWindowSize from "../../hooks/windowSize.jsx";
import { useModal } from "../../hooks/modalWindow.jsx";
import styles from "../../styles/stylesGenerales.module.css";
import Style from "../../../public/estilosGenerales/formularios.module.css";
import Graficos from "./graficos/graficos.jsx";

const ReporteI = ({ onHandleEditProcess, onHandleRegistrarProcesos }) => {
  const [status, changeStatus] = useState(true);
  const [gest, gestPro] = useState(false);
  const [mig, gestMig] = useState(false);
  const { width } = useWindowSize();
  const { openModal, VentanaModal } = useModal();
  const [estadoRow, setEstadoRow] = useState(null);
  const [showGraficos, setShowGraficos] = useState(false);

  const trigger = () => {
    changeStatus(!status);
  };

  const tiggerGest = () => {
    gestPro(!gest);
  };

  const triggerMig = () => {
    gestMig(!mig);
  };

  const handleRowClick = (index) => {
    setEstadoRow(index); // Actualiza el estado con el índice del <tr> clicado
  };
  return (
    <div className={styles.tablaContainer}>
      <h1 className={styles.titulo}>Reporte de inscripción</h1>

      <div className={styles.containerFilter}>
        <select id="" className={styles.containerSelect}>
          <option> Periodo</option>
          <option value=""> 2025-II</option>
          <option value=""> 2025-I</option>
          <option value=""> 2025-II</option>
        </select>

        <select id="" className={styles.containerSelect}>
          <option>Modalidad </option>
          <option value="">Semestral </option>
          <option value="">Anual </option>
          <option value="">Trimestral </option>
        </select>

        <select name="" id="" className={styles.containerSelect}>
          <option>Carrera - Institucion </option>
          <option value=""> Ing Informatica / San juan de los Morros</option>
          <option value="">Medicina / Calabozo</option>
          <option value="">etc</option>
        </select>

        <select name="" id="" className={styles.containerSelect}>
          <option>Nombre de proceso </option>
          <option value=""> Inscripciones Regulares</option>
          <option value=""> Inscripciones de Rezagados</option>
          <option value=""> Carga de Notas</option>
        </select>
      </div>

      <table className={styles.styledTable}>
        <thead>
          <tr className={styles.tr}>
            <th>Periodo</th>
            <th>Modalidad</th>
            <th>Carrera - Institucion</th>
            <th>Nombre del proceso</th>

            <th>Gestionar</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {!mig && (
            <tr className={styles.tr}>
              <td data-titulo="Periodo" className={styles.td}>
                2025-I
              </td>
              <td data-titulo="Modalidad" className={styles.td}>
                Semestral
              </td>
              <td data-titulo="Carrera" className={styles.td}>
                Ing Informatica - UNERG
              </td>
              <td data-titulo="Nombre del Proceso" className={styles.td}>
                Inscripciones
              </td>

              <td data-titulo="Gestionar" className={styles.td}>
                {" "}
                {status ? (
                  <FontAwesomeIcon
                    onClick={tiggerGest}
                    icon={faLayerGroup}
                    size="lg"
                    style={{ color: "#FFC300" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    size="lg"
                    style={{ color: "#ff3c00" }}
                  />
                )}{" "}
              </td>
            </tr>
          )}

          {!gest && (
            <tr className={styles.tr}>
              <td data-titulo="Periodo" className={styles.td}>
                2025-I
              </td>
              <td data-titulo="Modalidad" className={styles.td}>
                Semestral
              </td>
              <td data-titulo="Carrera" className={styles.td}>
                Ing Informatica - Calabozo
              </td>
              <td data-titulo="Nombre" className={styles.td}>
                Migracion de horario
              </td>

              <td data-titulo="Status" className={styles.td}>
                {" "}
                {status ? (
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    size="lg"
                    style={{ color: "#ff3c00" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    onClick={triggerMig}
                    icon={faLayerGroup}
                    size="lg"
                    style={{ color: "#FFC300" }}
                  />
                )}{" "}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {gest ? (
        <table className={styles.styledTable}>
          <thead>
            <tr className={styles.tr}>
              <th colSpan={7}>Carrera: Ing Sistemas</th>
              <th colSpan={2}>
                Ocultar{" "}
                <FontAwesomeIcon
                  icon={faMinus}
                  onClick={tiggerGest}
                  size="lg"
                  style={{ color: "#FFC300" }}
                />
              </th>
            </tr>
            <tr className={styles.tr}>
              <th colSpan={2}>Fecha</th>
              <th colSpan={3}>Condición</th>
              <th>
                Estuidantes a <br /> Inscribir
              </th>
              <th>
                Estudiantes <br /> Inscritos
              </th>
              <th>
                Estudiantes sin <br /> Inscribir
              </th>
              <th>Listado de estudiantes</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tr}>
              <td className={styles.td} colSpan={2}>
                Lunes 01-03-25
              </td>
              <td className={styles.td} colSpan={3}>
                Lisos con Promedio mayor o igual a 8{" "}
              </td>
              <td className={styles.td}>404</td>
              <td className={styles.td}>290</td>
              <td className={styles.td}>114</td>
              <td data-titulo="Status" className={`${styles.td}`}>
                <p className={styles.bgActivo}>Ver listado</p>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td} colSpan={2}>
                Martes 02-03-25
              </td>
              <td className={styles.td} colSpan={3}>
                Lisos con Promedio entre 6 y 8{" "}
              </td>
              <td className={styles.td}>256</td>
              <td className={styles.td}>38</td>
              <td className={styles.td}></td>
              <td data-titulo="Status" className={`${styles.td}`}>
                <p className={styles.bgActivo}>Ver listado</p>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td} colSpan={2}>
                Miércoles 03-03-25
              </td>
              <td className={styles.td} colSpan={3}>
                De 1 a 3 materias reprobadas y con promedio mayor o = a 8{" "}
              </td>
              <td className={styles.td}>122</td>
              <td className={styles.td}></td>
              <td className={styles.td}></td>
              <td data-titulo="Status" className={`${styles.td}`}>
                <p className={styles.bgActivo}>Ver listado</p>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td} colSpan={2}>
                Jueves 04-03-25
              </td>
              <td className={styles.td} colSpan={3}>
                Con más de 3 materias reprobadas y con promedio entre 6 y 8{" "}
              </td>
              <td className={styles.td}>538</td>
              <td className={styles.td}></td>
              <td className={styles.td}></td>
              <td data-titulo="Status" className={`${styles.td}`}>
                <p className={styles.bgActivo}>Ver listado</p>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td} colSpan={2}>
                Viernes 05-03-25
              </td>
              <td className={styles.td} colSpan={3}>
                Con promedio menor a 6
              </td>
              <td className={styles.td}>103</td>
              <td className={styles.td}></td>
              <td className={styles.td}></td>
              <td data-titulo="Status" className={`${styles.td}`}>
                <p className={styles.bgActivo}>Ver listado</p>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td} colSpan={2}></td>
              <td className={styles.td} colSpan={3}>
                Total:
              </td>
              <td className={styles.td}>1423</td>
              <td className={styles.td}>328</td>
              <td className={styles.td}>1095</td>
              <td data-titulo="Status" className={`${tyles.td}`}>
                <p
                  className={styles.bgActivo}
                  onClick={() => setShowGraficos(!showGraficos)}
                >
                  {showGraficos
                    ? "Ocultar estadisticas"
                    : "Mostrar estadisticas"}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <hr />
      )}

      {showGraficos && <Graficos />}

      {mig && (
        <form action="/migrar" method="post" className={Style.migform}>
          <h2 className={Style.h2}>
            Migracion de horario{" "}
            <FontAwesomeIcon
              icon={faMinus}
              onClick={triggerMig}
              size="lg"
              style={{ color: "#FFC300" }}
            />
          </h2>

          <label htmlFor="horario">
            <strong className={Style.strong}>seleccione horario</strong>
          </label>
          <label className={Style.label}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "7px",
                width: "100%",
              }}
            >
              <FontAwesomeIcon icon={faCalendarDays} size="lg" />
              <input
                type="file"
                id="horario"
                name="horario"
                className={styles.inputFile}
                required
              />
              Click Aqui .!
            </div>
          </label>

          <Submit />
        </form>
      )}
      <div className={styles.Universal}>
        <div className={styles.tabla_mobile}>
          <div className={styles.fila}>
            <div className={styles.columna}>
              <div className={styles.header}>Periodo</div>
              <div className={styles.contenido}>2025-I</div>
              <div className={styles.contenido}>2022-I</div>
            </div>
          </div>
        </div>
        <div className={styles.tabla_mobile}>
          <div className={styles.fila}>
            <div className={styles.columna}>
              <div className={styles.header}>Modalidad</div>
              <div className={styles.contenido}>Semestral</div>
              <div className={styles.contenido}>Anual</div>
            </div>
          </div>
          <div className={styles.tabla_mobile}>
            <div className={styles.fila}>
              <div className={styles.columna}>
                <div className={styles.header}>Carrera - Institucion</div>
                <div className={styles.contenido}>Ing Informatica - UNERG</div>
                <div className={styles.contenido}>Medicina - UNERG</div>
              </div>
              <div className={styles.tabla_mobile}>
                <div className={styles.fila}>
                  <div className={styles.columna}>
                    <div className={styles.header}>Nombre</div>
                    <div className={styles.contenido}>Inscripción</div>
                    <div className={styles.contenido}>Carnetización</div>
                  </div>
                  <div className={styles.tabla_mobile}>
                    <div className={styles.fila}>
                      <div className={styles.columna}>
                        <div className={styles.header}>Fecha de inicio</div>
                        <div className={styles.contenido}>01-06-2004</div>
                        <div className={styles.contenido}>01-05-2007</div>
                      </div>
                      <div className={styles.tabla_mobile}>
                        <div className={styles.fila}>
                          <div className={styles.columna}>
                            <div className={styles.header}>Fecha de cierre</div>
                            <div className={styles.contenido}>06-06-2004</div>
                            <div className={styles.contenido}>06-06-2007</div>
                          </div>
                          <div className={styles.tabla_mobile}>
                            <div className={styles.fila}>
                              <div className={styles.columna}>
                                <div className={styles.header}>Status</div>
                                <div className={styles.contenido}>Activo</div>
                                <div className={styles.contenido}>Inactivo</div>
                              </div>
                              <div className={styles.tabla_mobile}>
                                <div className={styles.fila}>
                                  <div className={styles.columna}>
                                    <div className={styles.header}>
                                      Gestionar
                                    </div>
                                  </div>
                                  <div className={styles.icon}>
                                    {status ? (
                                      <FontAwesomeIcon
                                        icon={faLayerGroup}
                                        size="lg"
                                        style={{ color: "#ff3c00" }}
                                      />
                                    ) : (
                                      <FontAwesomeIcon
                                        onClick={triggerMig}
                                        icon={faLayerGroup}
                                        size="lg"
                                        style={{ color: "#FFC300" }}
                                      />
                                    )}{" "}
                                  </div>
                                </div>
                              </div>
                              <div className={styles.tabla_mobile}>
                                <div className={styles.fila}>
                                  <div className={styles.columna}>
                                    <div className={styles.header}>Editar</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.icon}>
                            <FontAwesomeIcon
                              onClick={onHandleEditProcess}
                              icon={faPenToSquare}
                              size="lg"
                              style={{ color: "#FFC300" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReporteI;
