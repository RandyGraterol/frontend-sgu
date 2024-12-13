import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const images = [
  'https://unerg.edu.ve/wp-content/uploads/2024/02/mov4-1024x576.jpg',
  'https://unerg.edu.ve/wp-content/uploads/2024/02/mov5-1024x576.jpg',
  'https://unerg.edu.ve/wp-content/uploads/2024/02/mov6-1024x576.jpg',
  'https://unerg.edu.ve/wp-content/uploads/2024/02/mov2-1024x576.jpg',
  'https://unerg.edu.ve/wp-content/uploads/2024/02/8-1024x576.png',
  'https://unerg.edu.ve/wp-content/uploads/2024/02/mov7-1024x576.jpg'
];

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = 'estudiante@gmail.com';
    const validPassword = '123456789';

    if (email === validEmail && password === validPassword) {
      navigate('/home');
    } else {
      alert('¡Correo o contraseña incorrectos!');
    }
  };

  const toggle = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <div className={styles.container} id="container">
      <section className={styles.imagenLogin}>
        <img
          className={styles.imagen}
          src={images[currentImageIndex]}
          alt='Imagen de la Universidad'
        />
      </section>

      <section className={styles.loginRecuperar}>
        <div className={`${styles.division} ${isRightPanelActive ? styles.hidden : ''}`}>
          <h1 className={styles.tituloLogin}>Iniciar Sesión</h1>
          <div className={styles.containerRedesSociales}>
            <img src='./fb.png' className={styles.redesSociales} alt="Facebook"/>
            <img src='./instagram.png' className={styles.redesSociales} alt="Instagram"/>
            <img src='./twitter.png' className={styles.redesSociales} alt="Twitter"/>
          </div>
          <p>¡Bienvenido a la Universidad Romulo Gallegos!</p>
          <form className={styles.formulario} onSubmit={handleLogin}>
            <div className={styles.containerLabelInput}>
              <label className={styles.labelStyles}>Correo</label>
              <input
                type='email'
                placeholder='Ingrese correo electronico'
                required
                className={styles.inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.containerLabelInput}>
              <label className={styles.labelStyles}>Contraseña</label>
              <input
                type='password'
                placeholder='Ingrese contraseña'
                required
                className={styles.inputStyle}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={styles.submit} type="submit">Acceder</button>
          </form>
          <p onClick={toggle} title='¡Haz click aqui!' className={styles.restablecerPassword}>¿Haz olvidado tu contraseña?</p>
        </div>

        <div className={`${styles.division} ${isRightPanelActive ? '' : styles.hidden}`}>
          <h2 className={styles.tituloLogin}>¡Recuperar contraseña!</h2>
          <img src='./mail.png' className={styles.iconPasswordReset} alt="Recuperar contraseña"/>
          <p className={styles.message}>¡Se te enviara un correo electronico con un enlace para restablecer la contraseña!</p>
          <form className={styles.formulario}>
            <label className={styles.labelStyles}>Correo Electronico</label>
            <input
              type='email'
              placeholder='¡Ingresa tu correo electronico!'
              required
              className={styles.inputStyle}
            />
            <button className={styles.submit} type="submit">Enviar Correo</button>
          </form>
          <p onClick={toggle} className={styles.restablecerPassword}>¡Iniciar Sesión!</p>
        </div>
      </section>
    </div>
  );
};

export default Login;
