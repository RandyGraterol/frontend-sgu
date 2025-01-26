import React, { useState } from "react";
//import './TipoDeAutoridad.css';
import { toast, Toaster } from "sonner";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarDays,fa1 , faSquarePollHorizontal} from '@fortawesome/free-solid-svg-icons';

import Style from '../../../public/estilosGenerales/formularios.module.css'

import Submit from '../../particulas/SubmitButtons/Submit';
const RegistroAcademico = () => {
  //<link rel="stylesheet" href="https://unpkg.com/nice-forms.css@0.1.7/dist/nice-forms.css" />

  const [anoRegistro, setAnoRegistro] = useState("");
  const [modalidad, setModalidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const periodo = `${anoRegistro}-${modalidad}`;
    console.log(`periodo: ${periodo}`);
    toast.success(`Se registro el periodo: ${periodo}`)

    setAnoRegistro("");
    setModalidad("");
    
  };

  return (
    <center>
              <link rel="stylesheet" href="https://unpkg.com/nice-forms.css@0.1.7/dist/nice-forms.css" />

    <div className={Style.ScreenContainer} id="nice">
      <form onSubmit={handleSubmit} className={Style.form} >
    <h2 className={Style.h1} >Registro de Periodo Académico</h2>
      <label htmlFor="anoRegistro" >
             <strong className={Style.strong} > Año del Periodo</strong>
          </label>
      <label className={Style.label}>
        <FontAwesomeIcon icon={faCalendarDays} style={{color: "#5271ff"}} size='lg' />
          <input
            type="number"
            className={Style.input}
            id="anoRegistro"
            min="1990"
            max="2100"
            placeholder="Ingrese el año"
            value={anoRegistro}
            onChange={(e) => setAnoRegistro(e.target.value)}
            required
          />
        </label>

        <label htmlFor="modalidad">
          <strong className={Style.strong} >Modalidad</strong>
        </label>
        <label className={Style.label} htmlFor="modalidad">
          <FontAwesomeIcon icon={faSquarePollHorizontal} style={{color: "#5271ff"}} size='lg' />
          <select name="" id="modalidad" className={Style.input}>
            <option value="">anual</option>
            <option value="">semestral</option>
            <option value="">trimestral</option>
          </select>
        </label>

        <label htmlFor="modalidad">
             <strong className={Style.strong} > Seleccionar Numero</strong>
          </label>
        <label className={Style.label} id="nice-2">
          <FontAwesomeIcon icon={fa1} style={{color: "#5271ff"}} size='lg' />
          <select
            className={Style.input}
            id="modalidad"
            value={modalidad}
            onChange={(e) => setModalidad(e.target.value)}
            required
          >
            <option value="" disabled>
              Numero
            </option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
          </select>
        </label>
      
      <Submit/>

      </form>
      </div>
      <Toaster richColors/>
    </center>
  );
};

export default RegistroAcademico;
