import { InputBox } from './ImputBox/InputBox';
import {InputSelect} from './ImputSelect/InputSelect'
import {ButtomBox} from './ButtomBox/ButtomBox'
import {faLaptopFile,faLaptopCode,faSquarePollHorizontal} from '@fortawesome/free-solid-svg-icons'
import './form.css';
import './contenedorCarreras.css';

export const Form = ({action,method})=>{
	return (
		<div className="contenedorCarreras" >
			<form className="formCarreras" action="#" method={method} >
				<h1>Carreras</h1>
				<InputBox infoLabel="Codigo Opsu" type= "text" clase={faLaptopCode} />
				<InputBox infoLabel="Nombre" type= "text" clase={faLaptopFile} />
				<InputSelect campo="Modalidad" names="select" clase={faSquarePollHorizontal}/>
				<ButtomBox valor1="Enviar" valor2="Cancelar"/>
			</form>
		</div>
	);
}