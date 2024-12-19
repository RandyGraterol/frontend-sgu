import React,{useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Style from './listadoAu.module.css'

const ListadoAu = ({onhandleEditAut})=>{
    return(
        <div className={Style.center}>
            <h1 className={Style.h1}>Autoridades Registradas</h1>

            <table>
                <tr>
                    <th className={Style.th}>Instituto</th>
                    <th className={Style.th}>Tipo</th>
                    <th className={Style.th}>Nombre</th>
                    <th className={Style.th}>Firma</th>
                    <th className={Style.th}>Editar</th>
                </tr>
                <tbody>
                    <tr>
                        <td className={Style.td} >UNERG</td>
                        <td className={Style.td} >Decano AIS</td>
                        <td className={Style.td} >Leopoldo Lopez</td>
                        <td className={Style.td} ><a href="#"> ver firma </a> </td>
                        <td className={Style.td} > <FontAwesomeIcon onClick={onhandleEditAut}  icon={faPenToSquare} style={{color:"#FFC300"}}/> </td>
                    </tr>
                    <tr>
                        <td className={Style.td} >Calabozo</td>
                        <td className={Style.td} >Decano AIS</td>
                        <td className={Style.td} >Carlos Camacaro</td>
                        <td className={Style.td} > <a href="#"> ver firma </a> </td>
                        <td className={Style.td} > <FontAwesomeIcon onClick={onhandleEditAut}  icon={faPenToSquare} style={{color:"#FFC300"}}/> </td>
                    </tr>
                </tbody>
            </table>
            </div>

    )
}

export default ListadoAu;