import { InputBox } from './ImputBox/InputBox';
import {InputSelect} from './ImputSelect/InputSelect'
import {faUser,faLaptopFile,faBookOpenReader,faSquarePollHorizontal,faPersonChalkboard} from '@fortawesome/free-solid-svg-icons'

import Submit from "../../../particulas/SubmitButtons/Submit";
import Style from "../../../../public/estilosGenerales/formularios.module.css";

export const Form = ({action,method})=>{
	return (
		<section className={Style.ScreenContainer}>
			<form className={Style.form} method={method} >
				<h1 className={Style.h1} >Pensum</h1>
				<InputBox  id="Semestre" infoLabel="Semestre" placeholder="semestre ejemplo" type= "text" clase={faLaptopFile} 	/>
				<InputBox  id="Codigo de Carrera" infoLabel="Codigo de Carrera" type="text" placeholder="3024" clase={faPersonChalkboard} />
				<InputBox  id="Horas Teoricas" infoLabel="Horas Teoricas" type="text" placeholder="4" clase={faBookOpenReader} />
				<InputBox  id="Horas Practicas" infoLabel="Horas Practicas" type="text" placeholder="4" clase={faBookOpenReader} />
				<InputBox  id="Unidades de Credito" infoLabel="Unidades de Credito" type="text" placeholder="4" clase={faUser} />
				<InputSelect id="Prelaciones" campo="Prelaciones" names="select"  clase={faSquarePollHorizontal}/>
				<Submit/>
			</form>
		</section>
	);
}