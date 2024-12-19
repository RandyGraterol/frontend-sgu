import React from 'react';
import "./registroUsuario.css";

const RegistroUsuario = ({onClickRegisterUsuarios})=>{
	return(
		<>
	    <div onClick={onClickRegisterUsuarios} className='buttonRegister'>
		 	Registrar
		</div>
		</>
		)
}

export default RegistroUsuario;