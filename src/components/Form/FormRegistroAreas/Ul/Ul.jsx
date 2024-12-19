import { Li } from "../Li/Li";
import './ul.css'; 
export const Ul = ({valorActive}) =>{
    return (
        <ul className = {valorActive ? 'listactive' : 'lista' } >
            <Li content="Agronomia" /> 
            <Li content="Veterinaria" /> 
            <Li content="Ing. Sistema " /> 
            <Li content="Ing. Civil" /> 
        </ul>
    );
}