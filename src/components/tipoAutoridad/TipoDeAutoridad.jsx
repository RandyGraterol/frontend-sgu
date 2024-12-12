import React, { useState } from "react";
import "./TipoDeAutoridad.css";

const RegistroTipoAutoridad = () => {
  <link
    rel="stylesheet"
    href="https://unpkg.com/nice-forms.css@0.1.7/dist/nice-forms.css"
  />;

  const [autoridadRegistro, setAutoridad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Autoridad = autoridadRegistro.toUpperCase();
    console.log(Autoridad);
    setAutoridad("");
  };

  return (
    <center>
      <link
        rel="stylesheet"
        href="https://unpkg.com/nice-forms.css@0.1.7/dist/nice-forms.css"
      />

      <div className="nice-form-group">
        <h2>Registro de autoridad</h2>
        <form onSubmit={handleSubmit}>
          <div className="nice-form-group">
            <label htmlFor="anoRegistro" className="form-label">
              Tipo de autoridad
            </label>
            <input
              type="text"
              className="input1"
              id="AutoRegistro"
              placeholder="Ingrese el tipo de autoridad"
              value={autoridadRegistro}
              onChange={(e) => setAutoridad(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button1">
            Registrar
          </button>
        </form>
      </div>
    </center>
  );
};

export default RegistroTipoAutoridad;
