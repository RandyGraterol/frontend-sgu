import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="column">
      <h3>Facultades</h3>
    </div>
    <div className="column">
      <h3>Pregrado</h3>
    </div>
    <div className="column">
      <h3>Webmail</h3>
    </div>
    <div className="column">
      <h3>WorldMUN UCV</h3>
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