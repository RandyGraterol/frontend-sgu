import React from 'react';
import './footer.css';

const Footer = ()=>{
	return(
		<>
		<footer className='pie'>

		<p>Todos los derechos reservados &copy; Copyright</p>

		 <div className='containerFooter'>
         <img src='./icon/logoVenezuela.png' className='subFooter' />
         <img src='./icon/logoEducacion.png' className='subFooter' />
         </div>

		</footer>
		</>
		)
}

export default Footer;