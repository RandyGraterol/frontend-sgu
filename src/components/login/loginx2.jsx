import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './login.css';

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Aquí puedes validar las credenciales
    const validEmail = 'estudiante@gmail.com'; // Cambia esto por el email correcto
    const validPassword = '123456789'; // Cambia esto por la contraseña correcta

    if (email === validEmail && password === validPassword) {
      // Si las credenciales son correctas, redirige a la ruta '/home'
      navigate('/home');
    } else {
      alert('Credenciales incorrectas'); // Muestra un mensaje de error
    }
  };

  return (
    <>
    <h1 className='tituloPrincipal'>Sistema de Gestión Universitario</h1>

    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">

      <div className="form-container sign-up-container">
        <form action="#">
          <h1 className='tituloFormulario'>Recuperar Acceso</h1>
          {/* ... (resto del formulario de registro) */}
        </form>
      </div>{/*FIN DE RECUPERAR ACCESO*/}

      <div className="form-container sign-in-container">
        <form onSubmit={handleLogin}> {/* Agrega onSubmit aquí */}
          <h1 className='tituloFormulario'>Iniciar Sesion</h1>
          <div className="social-container">
            {/* ... (redes sociales) */}
          </div>
          <span>¡Ingresa tus credenciales!</span>
          <input
            className='inputLogin' 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} // Maneja el cambio de email
          />
          <input
            className='inputLogin' 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} // Maneja el cambio de contraseña
          />
          
          <button type="submit">Acceder</button> {/* Cambia a type="submit" */}
        </form>
      </div>{/*FIN DE INICIO DE SESION*/}

      <div className="overlay-container">
        <div className="overlay">

          <div className="overlay-panel overlay-left">
            <h1>Iniciar Sesión</h1>
            <p>¡Haz click para iniciar sesion!</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>Login</button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>Recuperar Acceso</h1>
            <p>¡Haz click para restablecer tu contraseña!</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>Recuperar</button>
          </div>

        </div>
      </div>

    </div>
    </>
  );
};

export default Login;