import React, { useState } from "react";


const RegistroTipoAutoridad = () => {
  const [autoridadRegistro, setAutoridad] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const Autoridad = autoridadRegistro.toLowerCase();
    console.log(Autoridad);
    setAutoridad("")
    
  };

  return (
    <div className="p-5 container-xl mt-5 bg-light">
      <h2 >Registro de autoridad</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="anoRegistro" className="form-label">
            Tipo de autoridad
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="AutoRegistro"
            placeholder="Ingrese el tipo de autoridad"
            value={autoridadRegistro}
            onChange={(e) => setAutoridad(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          <i className="bi bi-plus-circle-fill p-1"></i>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegistroTipoAutoridad;
