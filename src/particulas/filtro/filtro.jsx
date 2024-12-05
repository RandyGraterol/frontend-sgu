import React from 'react';
import './filtro.css';

const Filtro = ({textoDefiltro,utilidad})=>{
	return(
		<>
		 <form className='formularioBusqueda'>
		 	<label className='labelBuscar'><img src='./icon/buscar.png' className='buscar'/></label>
		 	<input type='search' placeholder={`Buscar por ${textoDefiltro}`} name='filtro' id='filtro' className='inputBuscar' required/>
		 	<input type='submit' value='Buscar' className='inputSubmitBuscar'/>
		 </form>
		</>
		)
}

export default Filtro;