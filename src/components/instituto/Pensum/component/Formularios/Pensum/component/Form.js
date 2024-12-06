import '../style/form.css';
import { InputBox } from './moleculas/InputBox';
import {InputSelect} from './moleculas/InputSelect'
import {ButtomBox} from './moleculas/ButtomBox'
import {faUser,faLaptopFile,faLaptopCode,faBookOpenReader,faSquarePollHorizontal} from '@fortawesome/free-solid-svg-icons'

export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<InputBox type= "text" clase={faLaptopFile} placeholderr="Semestre" />
			<InputBox type= "number" clase={faLaptopCode} placeholderr="Codigo de Asignatura"/>
			<InputBox type= "text" clase={faBookOpenReader} placeholderr="Horas Teoricas"/>
			<InputBox type= "text" clase={faBookOpenReader} placeholderr="Horas Practicas"/>
			<InputBox type= "text" clase={faUser} placeholderr="Unidades de Credito"/>
			<InputSelect campo="Prelaciones" names="select" clase={faSquarePollHorizontal}/>
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}	 