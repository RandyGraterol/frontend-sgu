import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faCalendarDays,
  faListOl,
  faGraduationCap,
  faLayerGroup,
  
} from "@fortawesome/free-solid-svg-icons";
import Submit from "../../particulas/SubmitButtons/Submit";

import Style from "./process.module.css";

const Process = () => {
  const [state, changeState] = useState("2025-I");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaCierre, setFechaCierre] = useState("");
  const [error, setError] = useState("");

  const handleModalidadChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "Anual") {
      changeState("2025-I");
    } else if (
      selectedValue === "semestral" ||
      selectedValue === "trimestral"
    ) {
      changeState("2025-II");
    }
  };

  useEffect(() => {
    const inicio = new Date(fechaInicio);
    const cierre = new Date(fechaCierre);

    if (inicio && cierre && inicio > cierre) {
      setError("La fecha de inicio no puede ser mayor que la fecha de cierre.");
    } else {
      setError("");
    }
  }, [fechaInicio, fechaCierre]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error) {
      return;
    }

    console.log("Formulario enviado");
  };

  return (
    <section className={Style.ScreenContainer}>
      <form className={Style.form} onSubmit={handleSubmit}>
        <h1 className={Style.h1}>Registrar Procesos</h1>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <label htmlFor="">
          <strong className={Style.strong}>Periodo Académico</strong>
        </label>
        <label htmlFor="" className={Style.label}>
          <FontAwesomeIcon
            icon={faListOl}
            size="lg"
            style={{ color: "#5271ff" }}
          />
          <select
            name="periodo"
            required
            className={Style.input}
            id="periodo"
            onChange={handleModalidadChange}
          >
            <option value="" disabled>
              Seleccione modalidad
            </option>
            <option value="2025-I">2025-I </option>
            <option value="2025-II">2025-II </option>
            <option value="2025-III">2025-III </option>
          </select>
        </label>

        <label htmlFor="modalidad">
          <strong className={Style.strong}>Modalidad</strong>
        </label>
        <label htmlFor="modalidad" className={Style.label}>
          <FontAwesomeIcon
            icon={faLayerGroup}
            size="lg"
            style={{ color: "#5271ff" }}
          />
          <select
            name="modalidad"
            required
            className={Style.input}
            id="modalidad"
            onChange={handleModalidadChange}
          >
            <option value="" disabled>
              Seleccione modalidad
            </option>
            <option value="Anual">Anual </option>
            <option value="semestral">Semestral </option>
            <option value="trimestral">Trimestral </option>
          </select>
        </label>

        <label htmlFor="Institucion">
          <strong className={Style.strong}>Institucion</strong>
        </label>
        <label htmlFor="Institucion" className={Style.label}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            size="lg"
            style={{ color: "#5271ff" }}
          />
          <select
            name="Institucion"
            required
            className={Style.input}
            id="Institucion"
          >
            <option value="" disabled>
              Seleccione Institucion
            </option>
            <option value="">San Juan de los Morros</option>
            <option value="">Calabozo</option>
            <option value="">Maturin</option>
          </select>
        </label>

        <label htmlFor="carrera">
          <strong className={Style.strong}>Carrera </strong>
        </label>
        <label htmlFor="carrera" className={Style.label}>
          <FontAwesomeIcon
            icon={faGraduationCap}
            size="lg"
            style={{ color: "#5271ff" }}
          />
          <select name="carrera" required className={Style.input} id="carrera">
            <option value="" disabled>
              Seleccione carrera
            </option>
            <option value="">Ing. Informática </option>
            <option value="">Ing. civil</option>
            <option value="">Medicina </option>
          </select>
        </label>

        <label htmlFor="nombre">
          <strong className={Style.strong}>Nombre del proceso</strong>
        </label>
        <label htmlFor="nombre" className={Style.label}>
          <FontAwesomeIcon
            icon={faListCheck}
            size="lg"
            style={{ color: "#5271ff" }}
          />
          <select name="proceso" required className={Style.input} id="nombre">
            <option value="" disabled>
              Seleccione proceso
            </option>
            <option value="">Proceso de carga de horario</option>
            <option value="">
              Proceso de inscripcion por carreas semestrales
            </option>
            <option value="">Proceso de validacion de inscripcion</option>
          </select>
        </label>

        <div className={Style.dateContainer}>
          <div className={Style.halfContainer}>
            <label htmlFor="fInicio">
              <strong className={Style.strong}>Fecha de inicio</strong>
            </label>
            <label htmlFor="fInicio" className={Style.label}>
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="lg"
                style={{ color: "#5271ff" }}
              />
              <input
                type="date"
                name="fInicio"
                id="fInicio"
                className={Style.input}
                required
                value={fechaInicio}
                onChange={(e) => setFechaInicio(e.target.value)}
              />
            </label>
          </div>

          <div className={Style.halfContainer}>
            <label htmlFor="fCierre">
              <strong className={Style.strong}>Fecha de cierre</strong>
            </label>
            <label htmlFor="fCierre" className={Style.label}>
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="lg"
                style={{ color: "#5271ff" }}
              />
              <input
                type="date"
                name="fCierre"
                id="fCierre"
                className={Style.input}
                required
                value={fechaCierre}
                onChange={(e) => setFechaCierre(e.target.value)}
              />
            </label>
          </div>
        </div>
        <Submit />
      </form>
    </section>
  );
};

export default Process;
