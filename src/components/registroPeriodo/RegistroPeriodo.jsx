import React, { useState } from "react";
import './TipoDeAutoridad.css';


const RegistroAcademico = () => {
  <link rel="stylesheet" href="https://unpkg.com/nice-forms.css@0.1.7/dist/nice-forms.css" />

  const [anoRegistro, setAnoRegistro] = useState("");
  const [modalidad, setModalidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const periodo = `${anoRegistro}-${modalidad}`;
    console.log(`periodo: ${periodo}`);

    setAnoRegistro("");
    setModalidad("");
    
  };

  return (
    <center>
              <link rel="stylesheet" href="https://unpkg.com/nice-forms.css@0.1.7/dist/nice-forms.css" />

    <div className="nice-form-group" id="nice">
    <h2>Registro de Periodo Académico</h2>
      <form onSubmit={handleSubmit}>
      <div className="nice-form-group">
      <label htmlFor="anoRegistro" className="form-label">
            Año del Periodo
          </label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="anoRegistro"
            min="1990"
            max="2100"
            placeholder="Ingrese el año"
            value={anoRegistro}
            onChange={(e) => setAnoRegistro(e.target.value)}
            required
          />
        </div>
        <div className="nice-form-group" id="nice-2">
        <label htmlFor="modalidad" className="form-label">
            Seleccionar Numero
          </label>
          <select
            className="form-control form-control-sm"
            id="modalidad"
            value={modalidad}
            onChange={(e) => setModalidad(e.target.value)}
            required
          >
            <option value="" disabled>
              Numero
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <button type="submit" className="button1">
          <i className="bi bi-plus-circle-fill p-1"></i>
          Registrar
        </button>
      </form>
    </div>
    </center>
  );
};

export default RegistroAcademico;
