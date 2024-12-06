import { InputBox } from './moleculas/InputBox';
import {ButtomBox} from './moleculas/ButtomBox'
import {InputSelect} from './moleculas/InputSelect'
import { InputCarreras } from './moleculas/InputCarreras';
import {faLaptopFile,faLaptopCode,faPersonChalkboard,faBoxesPacking	} from '@fortawesome/free-solid-svg-icons'
import '../style/form.css'


export const Form = ({onBotton,action,method})=>{
	return (
		<form  method={method} >
			<h1>Areas</h1>
			<InputBox type= "text" clase={faLaptopCode} placeholderr="Codigo" />
			<InputBox type= "text" clase={faLaptopFile} placeholderr="Nombre"/>
			<InputSelect campo="Carreras" clase={faPersonChalkboard}  names="select" />
			<InputCarreras onBotton={onBotton} fort="cajaCarreras" clase={faBoxesPacking}/>
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}
