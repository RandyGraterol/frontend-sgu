import { Option } from "../Option/Option";
import Style from "../../../../../public/estilosGenerales/formularios.module.css";

export const Select = ({valorActive}) =>{
    return (
        <select className={Style.input} >
            <Option content="Agronomia" /> 
            <Option content="Veterinaria" /> 
            <Option content="Ing. Sistema " /> 
            <Option content="Ing. Civil" /> 
        </select>
    );
}