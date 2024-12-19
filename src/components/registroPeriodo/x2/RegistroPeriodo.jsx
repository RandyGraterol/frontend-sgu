import React, { useState } from "react";


const RegistroAcademico = () => {
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
    <div className="p-5 container-xl mt-5 bg-light">
      <h2>Registro de Periodo Académico</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
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
        <div className="form-group mb-3">
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
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-plus-circle-fill p-1"></i>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegistroAcademico;
