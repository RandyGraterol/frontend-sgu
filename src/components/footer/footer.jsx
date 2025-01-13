import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="column">
      <h3>Facultades</h3>
      <a href="/departamentos-centrales" title="Departamentos Centrales">Departamentos Centrales</a>
    </div>
    <div className="column">
      <h3>Pregrado</h3>
      <a href="/informacion-pregrado" title="Información de Pregrado">Información</a>
    </div>
    <div className="column">
      <h3>Webmail</h3>
      <a href="/consulta-trabajo" title="Consulta tu trabajo">Consulta de Trabajo</a>
    </div>
    <div className="column">
      <h3>WorldMUN UCV</h3>
      <a href="/estudiantes-de-paz" title="Conoce a los estudiantes de paz">Estudiantes de Paz</a>
    </div>
    <div className="social-media">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
        <img src="fbblue.png" alt="Facebook logo" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
        <img src="xblue.png" alt="Twitter logo" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
        <img src="igblue.png" alt="Instagram logo" />
      </a>
    </div>
  </footer>
);

export default Footer;
