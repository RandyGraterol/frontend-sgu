import React from "react";
import "./styles/responsiveTable.css"; // Importa el archivo CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faUserLock } from "@fortawesome/free-solid-svg-icons";
import Registro from "../particulas/registro/registro.jsx";
import Filtro from "../particulas/filtro/filtro.jsx";

const ControlAcceso = ({ icono, name, info }) => {
  const lista = [];

  // Generar las filas de la tabla
  for (let x = 0; x < 10; x++) {
    lista.push(
      <tr key={x}>
        <td data-label="Usuario">elrandygraterol@gmail.com</td>
        <td data-label="Grupo">Admin</td>
        <td data-label="Sede">AIS</td>
        <td data-label="Fecha y Hora">28/09/24</td>
        <td data-label="Acción">
          <div className="botoneraTable">
            <FontAwesomeIcon
              className="icon"
              title="Ver"
              icon={faEllipsisH}
              size="2x"
              color="blue"
            />
          </div>
        </td>
      </tr>
    );
  }

  return (
    <>
      <div className="containerTituloBotones">
        <center>
          <h1 className="tituloH1">Control de acceso</h1>
        </center>
        <div className="containerBotones">
          <Filtro textoDefiltro="Sede , grupo de usuario" />
          <center>
            <Registro />
          </center>
        </div>
        <div className="titulo">
          <FontAwesomeIcon icon={icono} size="4x" color="blue" />
          <h1 className="tituloH1">
            {name} {info}
          </h1>
        </div>
      </div>
      <div className="containerTable">
        <table className="styledTable">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Grupo</th>
              <th>Sede</th>
              <th>Fecha y Hora</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>{lista}</tbody>
        </table>
      </div>
    </>
  );
};

export default ControlAcceso;
