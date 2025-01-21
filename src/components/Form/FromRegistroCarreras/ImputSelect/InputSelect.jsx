import {Select} from '../Select/Select'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Style from "../../../../../public/estilosGenerales/formularios.module.css";

export const InputSelect = ({id,clase, names,campo}) =>{
    return (
        <>
        <label htmlFor={id}>
            <strong className={Style.strong}>  Modalidad </strong>
        </label>

        <label htmlFor={id} className={Style.label}>
            <FontAwesomeIcon icon={clase} size='lg' style={{color: "#5271ff" }} />
            <Select id={id} campo={campo} namess={names} placeholder="Selecione Un campo" />
        </label>
        </>
    );
}