import { InputBox } from './ImputBox/InputBox';
import {InputSelect} from './ImputSelect/InputSelect'
import {ButtomBox} from './ButtonBox/ButtomBox'
import {faUser,faLaptopFile,faBookOpenReader,faSquarePollHorizontal,faPersonChalkboard} from '@fortawesome/free-solid-svg-icons'
import './form.css';
import './contenedorPensum.css'

export const Form = ({action,method})=>{
	return (
		<div className="contenedorPensum">
			<form className="formPensum" method={method} >
				<h1>Pensum</h1>
				<InputBox infoLabel="Semestre" type= "text" clase={faLaptopFile} 	/>
				<InputBox infoLabel="Codigo de Carrera" type= "text" clase={faPersonChalkboard} />
				<InputBox infoLabel="Horas Teoricas" type= "text" clase={faBookOpenReader} />
				<InputBox infoLabel="Horas Practicas" type= "text" clase={faBookOpenReader} />
				<InputBox infoLabel="Unidades de Credito" type= "text" clase={faUser} />
				<InputSelect campo="Prelaciones" names="select" clase={faSquarePollHorizontal}/>
				<ButtomBox valor1="Enviar" valor2="volver"/>
			</form>
		</div>
	);
}