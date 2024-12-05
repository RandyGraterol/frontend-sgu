import React from 'react';
import './registro.css';

const Registro = ({onRegisterClick})=>{
	return(
		<>
		<div className='buttonRegister' onClick={onRegisterClick}>
		 	Registrar
		</div>
		</>
		)
}
export default Registro;