import {Input} from '../Imput/Input'
//import './inputbox.css'

import Style from "../../../../../public/estilosGenerales/formularios.module.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export const InputBox = ({type,clase,placeholderr, id,labelcontent})=>{
    return (
        <>
        <label htmlFor={id} >
            <strong className={Style.strong} > {labelcontent} </strong>
        </label>

        <label htmlFor={placeholderr} className={Style.label}>
            <FontAwesomeIcon icon={clase} size='lg' style={{ color: "#5271ff" }} />
            <Input id={id} type= {type} placeholderr={placeholderr} />
        </label>
        </>
    );
}