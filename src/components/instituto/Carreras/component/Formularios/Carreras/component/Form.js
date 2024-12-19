import '../style/form.css';
import { InputBox } from './moleculas/InputBox';
import {InputSelect} from './moleculas/InputSelect'
import {ButtomBox} from './moleculas/ButtomBox'
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