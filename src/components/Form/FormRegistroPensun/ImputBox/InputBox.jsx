import {Input} from '../Imput/Input'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Style from "../../../../../public/estilosGenerales/formularios.module.css";


export const InputBox = ({type,clase,infoLabel,id,placeholder})=>{
    return (
        <>
        <label htmlFor={id}>
            <strong className={Style.strong} >{infoLabel}</strong>
        </label>
        <label htmlFor={IDBKeyRange} className={Style.label}>
            <FontAwesomeIcon icon={clase} size='lg' style={{color: "#5271ff" }} />
            <Input type= {type} id={id} placeholder={placeholder} />
        </label>
        </>
    );
}