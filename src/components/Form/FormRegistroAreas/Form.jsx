import { InputBox } from './ImputBox/InputBox';
import { UlBox } from './UlBox/UlBox';
import { InputCarreras } from './ImputCarrera/InputCarreras';
import {faLaptopFile,faLaptopCode,faPersonChalkboard,faBoxesPacking	} from '@fortawesome/free-solid-svg-icons'
/*import './form.css'
import './contenedorAreas.css'*/
import Style from "../../../../public/estilosGenerales/formularios.module.css"

import Submit from "../../../particulas/SubmitButtons/Submit.jsx"


export const Form = ({onBotton,action,method,onActivar,valorActive})=>{
	return (
		<div className={Style.ScreenContainer} >	
			<form  method={method} className={Style.form} >
				<h2 className={Style.h1} >Areas</h2>
				<InputBox type= "text" clase={faLaptopCode} placeholderr="Codigo" labelcontent="Código"/>
				<InputBox type= "text" clase={faLaptopFile} placeholderr="Nombre" labelcontent="Nombre" />
				<UlBox valorActive={valorActive} onActivar={onActivar} labelcontent="Carrera" clase={faPersonChalkboard} />
				<InputCarreras onBotton={onBotton} fort="cajaCarreras" clase={faBoxesPacking}/>
				<Submit/>
			</form>
		</div>
	);
}
