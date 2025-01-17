import { InputBox } from './ImputBox/InputBox';
import {InputSelect} from './ImputSelect/InputSelect'
import {faLaptopFile,faLaptopCode,faSquarePollHorizontal} from '@fortawesome/free-solid-svg-icons'

import Submit from "../../../particulas/SubmitButtons/Submit";
import Style from "../../../../public/estilosGenerales/formularios.module.css";

export const Form = ({action,method})=>{
	return (
		<section className={Style.ScreenContainer} >
			<form className={Style.form} action="#" method={method} >
				<h1 className={Style.h1}>Carreras</h1>
				<InputBox infoLabel="Codigo Opsu" id="Codigo Opsu" type= "text" clase={faLaptopCode} placeholder="1045" />
				<InputBox infoLabel="Nombre" id="Nombre" type="text" clase={faLaptopFile} placeholder="ejemplo" />
				<InputSelect infoLabel="Modalidad" campo="Modalidad" id="modalidad" names="select" clase={faSquarePollHorizontal}/>

				<Submit/>

			</form>
		</section>
	);
}