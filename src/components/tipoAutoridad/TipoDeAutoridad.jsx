import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faArrowsDownToPeople } from "@fortawesome/free-solid-svg-icons";

import Submit from "../../particulas/SubmitButtons/Submit";
import Style from "../../../public/estilosGenerales/formularios.module.css";

const RegistroTipoAutoridad = () => {

  const [autoridadRegistro, setAutoridad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Autoridad = autoridadRegistro.toUpperCase();
    toast.success(`Se registro el tipo de autoridad: ${Autoridad}`);
    setAutoridad("");
  };

  return (
    <section className={Style.ScreenContainer}>

        <form onSubmit={handleSubmit} className={Style.form}>
        <h2 className={Style.h2} >Registro de autoridad</h2>

            <label htmlFor="anoRegistro" >
              Tipo de autoridad
            </label>

            <label htmlFor="anoRegistro" className={Style.label}>
<FontAwesomeIcon icon={faArrowsDownToPeople} style={{color: "#5271ff"}} size='lg' />
            <input
              type="text"
              className={Style.input}
              id="AutoRegistro"
              placeholder="Ingrese el tipo de autoridad"
              value={autoridadRegistro}
              onChange={(e) => setAutoridad(e.target.value)}
              required
            />
            </label>

            <Submit />

        </form>
    </section>
  );
};

export default RegistroTipoAutoridad;
