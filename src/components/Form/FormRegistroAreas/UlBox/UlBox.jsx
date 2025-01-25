import { Ul } from "../Ul/Ul";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import './ulbox.css'

import Style from "../../../../../public/estilosGenerales/formularios.module.css"

export const UlBox = ({clase,onActivar,valorActive,labelcontent})=>{
    return (
        <>
        <label htmlFor="">
            <strong className={Style.strong} > {labelcontent}</strong>
        </label>

        <label  onClick={onActivar}  className={Style.label}>
            <FontAwesomeIcon  icon={clase} size="lg" style={{ color: "#5271ff" }}  />
            <Ul valorActive={valorActive} />

        </label>
        </>
    );
}
/*
mano, ricardo, transorma ese ul en un select normal y ponle la clase input y
adapta la funcionalidad de caja de carreras con los estilos relacionados a los formularios */
