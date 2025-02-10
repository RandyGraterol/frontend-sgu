import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotificationModal } from '../../hooks/notifications.jsx'; // Importa el hook de notificación
import styles from './login.module.css';
import Nav from '../navBar/navbar.jsx';
import Footer from '../footer/footer.jsx';
import axios from 'axios';
import useWindowSize from '../../hooks/windowSize.jsx';

const images = [
  "/fotos/login1.jpg",
  "/fotos/login2.jpg",
  "/fotos/login3.jpg",
];

const Login = () => {
  
  const navigate = useNavigate();
  const { width } = useWindowSize();
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { openModal, NotificationModal } = useNotificationModal(); // Usa el hook de notificación

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Verifica si el token ya existe al cargar el componente
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      navigate('/home'); // Redirige si ya está autenticado
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://154.56.0.218:8000/api/v1/login', 
        new URLSearchParams({
          grant_type: '',
          username: email,
          password: password,
          scope: '',
          client_id: '',
          client_secret: ''
        }),{
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      console.log(response.data.status,'RESPUESTA DE LA API');

      if (response.data.access_token) {
        localStorage.setItem('access_token', response.data.access_token); // Almacena el token
        navigate('/home'); // Redirige a la página de inicio
      }
    }catch(error) {
      console.error('Error en el login:', error);
      openModal('Correo o contraseña incorrecto, vuelve a intentarlo.');
    }
  };

  const toggle = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <>
      <Nav login/> {/* Oculto */}
      <div className={styles.container} id="container">
        <NotificationModal /> {/* Componente de notificación */}
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
            <p className={styles.p}>¡Bienvenido a la Universidad Romulo Gallegos!</p>
            <form className={styles.formulario} onSubmit={handleLogin}>
              <div className={styles.containerLabelInput}>
                <label className={styles.labelStyles}>Correo</label>
                <input
                  type='email'
                  placeholder='Ingrese correo electronico'
                  required
                  className={styles.inputStyle}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.containerLabelInput}>
                <label className={styles.labelStyles}>Contraseña</label>
                <input
                  style={{ backgroundColor: 'rgb(255,255,255)' }}
                  type='password'
                  placeholder='Ingrese contraseña'
                  required
                  className={styles.inputStyle}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.containerButton}>
                <button className={styles.submit} type="submit">Acceder</button>
              </div>
            </form>
            <p onClick={toggle} title='¡Haz click aqui!' className={`${styles.restablecerPassword} ${styles.p}`}>¿Haz olvidado tu contraseña?</p>
          </div>
          <div className={`${styles.division} ${isRightPanelActive ? '' : styles.hidden}`}>
            <img src='./mail.png' className={styles.iconPasswordReset} alt="Recuperar contraseña"/>
            <h2 className={styles.tituloLogin}>¡Recuperar contraseña!</h2>
            <p className={styles.message}>¡Se te enviara un correo electronico con un enlace para restablecer la contraseña!</p>
            <form className={styles.formulario}>
              <div className={styles.containerLabelInput}>
                <label className={styles.labelStyles}>Correo Electronico</label>
                <input
                  type='email'
                  placeholder='¡Ingresa tu correo electronico!'
                  required
                  className={styles.inputStyle}
                />
              </div>
              <div className={styles.containerButton}>
                <button className={styles.submit} type="submit">Enviar Correo</button>
              </div>
              <p onClick={toggle} className={styles.restablecerPassword}>¡Iniciar Sesión!</p>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Login;