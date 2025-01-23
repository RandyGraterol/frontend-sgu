import React from "react";

import "./rGrupoUsuario.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSync,
  faUserLock,
  faSignInAlt,
  faEdit,
  faPlus,
  faUsers,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Registro from "../registro/registro.jsx";
import Filtro from "../filtro/filtro.jsx";
const RgrupoUsuario = ({ name, onRegisterClick }) => {
  const usuarios = [];
  for (let x = 0; x < 10; x++) {
    usuarios.push(
      <tr key={x}>
        <td>Admin</td>
        <td className="iconosAcciones">
          <FontAwesomeIcon icon={faEye} size="2x" color="blue" />
          <FontAwesomeIcon icon={faSync} size="2x" color="blue" />
        </td>
      </tr>
    );
  }
  return (
    <>
      <div className="containerTituloBotones">
        <div className="titulo">
          <FontAwesomeIcon icon={faUsers} size="4x" color="blue" />
          <center>
            <h1 className="tituloH1">Crear grupo de Usuarios</h1>
          </center>
        </div>
        <div className="containerBotones">
          <Filtro textoDefiltro="Grupo usuario" />
          <center>
            <Registro onRegisterClick={onRegisterClick} />
          </center>
        </div>
      </div>

      <div className="containerTable">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nombre grupo usuario</th>
              <th>Ver/Actualizar</th>
            </tr>
          </thead>
          <tbody>{usuarios}</tbody>
        </table>
      </div>
    </>
  );
};

export default RgrupoUsuario;
