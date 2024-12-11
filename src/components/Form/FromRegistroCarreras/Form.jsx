import './form.css';
import { InputBox } from './ImputBox/InputBox';
import {InputSelect} from './ImputSelect/InputSelect'
import {ButtomBox} from './ButtomBox/ButtomBox'
import {faLaptopFile,faLaptopCode,faSquarePollHorizontal} from '@fortawesome/free-solid-svg-icons'

export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<InputBox type= "text" clase={faLaptopCode} placeholderr="Codigo Opsu"/>
			<InputBox type= "text" clase={faLaptopFile} placeholderr="Nombre " />
			<InputSelect campo="Modalidad" names="select" clase={faSquarePollHorizontal}/>
			<ButtomBox valor1="Enviar" valor2="Cancelar"/>
		</form>
	);
}