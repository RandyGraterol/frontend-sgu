import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="column">
      <h3>Facultades</h3>
      <a href="#">Departamentos Centrales</a>
    </div>
    <div className="column">
      <h3>Pregrado</h3>
      <a href="#">Información</a>
    </div>
    <div className="column">
      <h3>Webmail</h3>
      <a href="#">Consulta de Trabajo</a>
    </div>
    <div className="column">
      <h3>WorldMUN UCV</h3>
      <a href="#">Estudiantes de Paz</a>
    </div>
    <div className="social-media">
    <a href="#"><img height={25} src="fbblue.png" alt="Facebook" /></a>
      <a href="#"><img height={32} src="xblue.png" alt="Twitter" /></a>
      <a href="#"><img height={30} src="igblue.png" alt="Instagram" /></a>
    </div>
  </footer>
);

export default Footer;
