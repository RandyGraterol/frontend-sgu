import {Input} from '../Imput/Input'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Style from "../../../../../public/estilosGenerales/formularios.module.css";


export const InputBox = ({type,clase,infoLabel,placeholder, id})=>{
    return (
        <>
        <label htmlFor={id}>
         <strong className={Style.strong}> {infoLabel} </strong>
        </label>

        <label htmlFor={id} className={Style.label}>
            <FontAwesomeIcon icon={clase} size='lg' style={{color: "#5271ff" }} />
            <Input id={id} placeholder={placeholder}  type= {type} />
        </label>
        </>
    );
}