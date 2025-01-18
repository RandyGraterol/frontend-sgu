import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Style from "../../../../../public/estilosGenerales/formularios.module.css";
import {Select} from '../Select/Select'

export const InputSelect = ({clase, id, names,campo}) =>{
    return (
        <>
        <label htmlFor={id}>
            <strong className={Style.strong}> {campo} </strong>
        </label>
        <label className={Style.label}>
            <FontAwesomeIcon icon={clase} size='lg' style={{color: "#5271ff" }} />
            <Select campo={campo} id={id} namess={names} placeholder="Selecione Un campo" />
        </label>
        </>
    );
}