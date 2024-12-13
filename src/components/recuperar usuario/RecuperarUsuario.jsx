import React, { useState } from "react";
import "./RecuperarUsuario.css";
import { Toaster, toast } from "sonner";

const RecuperarUsuario = () => {
  const [email, setEmail] = useState("");

    const EnviarCorreo = () => {
    return new Promise((resolve) => setTimeout(resolve, 3000));//codigo de ejemplo borrar al tener acceso a la api
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.promise(EnviarCorreo, {
      error: "Error al enviar el correo",
      success: `Correo enviado a: ${email}`,
      loading: "Enviando",
    });
    setEmail("");
  };

  return (
    <div className="recuperar-container">
      <h2>RESTABLECER CONTRASEÑA</h2>
      <p className="mensaje">
        ¿Olvidó su contraseña? Ingrese su correo electrónico y le enviaremos las instrucciones para el establecimiento de una
        nueva contraseña
      </p>
      <form onSubmit={handleSubmit} className="recuperar-formulario">
        <div className="formulario-grupo">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="formulario-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Restablecer contraseña
        </button>
      </form>
      <Toaster richColors />
    </div>
  );
};


export default RecuperarUsuario;
