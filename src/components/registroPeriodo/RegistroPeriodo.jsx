import React, { useState } from "react";
import './TipoDeAutoridad.css';
import { toast, Toaster } from "sonner";

const RegistroAcademico = () => {
  <link rel="stylesheet" href="https://unpkg.com/nice-forms.css@0.1.7/dist/nice-forms.css" />

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

    <div className="nice-form-group" id="nice">
      <form onSubmit={handleSubmit}>
    <h2>Registro de Periodo Académico</h2>
      <div className="nice-form-group">
      <label htmlFor="anoRegistro" className="form-label">
            Año del Periodo
          </label>
          <input
            type="number"
            className="select1"
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
            className="select1"
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
        </div>
        <button type="submit" className="button1">
          <i className="bi bi-plus-circle-fill p-1"></i>
          Registrar
        </button>
      </form>
      </div>
      <Toaster richColors/>
    </center>
  );
};

export default RegistroAcademico;
