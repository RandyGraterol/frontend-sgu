import {useState} from 'react'
import { InputBox } from './ImputBox/InputBox';
import { SelectBox } from './SelectBox/SelectBox';
import { InputCarreras } from './ImputCarrera/InputCarreras';
import {TablaCarrerasAgg} from './TablaCarreraAgg/TablaCarrerasAgg'
import {faLaptopFile,faLaptopCode,faPersonChalkboard,faBoxesPacking	} from '@fortawesome/free-solid-svg-icons'

import Style from "../../../../public/estilosGenerales/formularios.module.css"
import Submit from "../../../particulas/SubmitButtons/Submit.jsx"


export const Form = ({action,method})=>{
	const [boton, setBoton] = useState(false)
    function botton(){
        setBoton(prev => !boton)
        return boton;
    }
	return (
		<div className={Style.ScreenContainer} >	
			<form  method={method} className={Style.form} >
				<h2 className={Style.h1} >Areas</h2>
				<InputBox type= "text" clase={faLaptopCode} placeholderr="Codigo" labelcontent="Código"/>
				<InputBox type= "text" clase={faLaptopFile} placeholderr="Nombre" labelcontent="Nombre" />
				<SelectBox  labelcontent="Carrera" clase={faPersonChalkboard} />
				<InputCarreras onBotton={botton} fort="cajaCarreras" clase={faBoxesPacking}/>
				<Submit/>
			</form>
			<TablaCarrerasAgg onBotton={botton} boton={boton}/>
		</div>
	);
}
