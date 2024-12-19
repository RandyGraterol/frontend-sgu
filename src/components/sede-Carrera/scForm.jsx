import React,{useState} from "react";
import {faBuildingColumns, faCircleXmark, faMagnifyingGlass, faPlus, faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Submit from '../../particulas/SubmitButtons/Submit';

import Style from './SedeCarrera.module.css'


const SCForm = ()=>{
    const [state, changeState] = useState(false);

    const swap= ()=>{
        changeState(!state)
    }
    return(

    <div className={Style.ScreenContainer} >    
    <form action='/AddSede' method='POSt' className={Style.form} >
        <h1 className={Style.h1} >Asignar Sede - Carrera</h1>

        <label htmlFor="Institucion" className={Style.label} >
            <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#5271ff"}} size='lg' />
            <strong className={Style.strong} > Institucion </strong> 
            <select className={Style.input} name="Institucion" required id="Institucion">
                <option value="" disabled >Seleccione Institucion</option>
                <option value="UNERG">UNERG</option>
                <option value="Calabozo">Calabozo</option>
                <option value="Zaraza">Zaraza</option>
            </select>
        </label>

        <label htmlFor="buscar" className={Style.label} >
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"#5271ff"}} size='lg' />
            <strong className={Style.strong} >Buscar carrera</strong> 
            <input type="search" id="buscar" placeholder="Cualquier carrera" className={Style.input} maxLength={50} />
        </label>

        {state? (
            <p>busca otra carrera</p>
        ):(
            <table className={Style.table}>
                <tbody>
                <tr>
                <td className={Style.td}  >3405</td>
                <td className={Style.td} >Ing informática</td>
                <td className={Style.td} >semestral</td>
                <td className={Style.td} > <FontAwesomeIcon icon={faCheck}  style={{color:"#33df04"}} size='lg' onClick={swap} /> </td>
                </tr>
                </tbody>
            </table>
        )}


        <h2 className={Style.h2} >Listado de carreras seleccionadas</h2>
        <table className={Style.table}>
            <thead>
                <tr>
                <th className={Style.th} >Codigo Opsu</th>
                <th className={Style.th} >Nombre</th>
                <th className={Style.th} >Modalidad</th>
                <th className={Style.th} >eliminar</th>
                </tr>
            </thead>

            {state? (
            <tbody>
                <tr>
                    <td className={Style.td} >3405</td>
                    <td className={Style.td} >Ing informática</td>
                    <td className={Style.td} >semestral</td>
                    <td className={Style.td} > <FontAwesomeIcon icon={faCircleXmark} style={{color:"#d55438"}} size='lg' onClick={swap} /> </td>
                </tr>
            </tbody>
            
        ): (
            <tbody>
                <tr><td colSpan={4} className={Style.td}>sin carreras añadidas</td></tr>

            </tbody>
            )}

        </table>

    <Submit/>
    
</form>
</div>
    )
};

export default SCForm;