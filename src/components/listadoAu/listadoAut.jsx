import React,{useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Style from './listadoAu.module.css'

const ListadoAu = ()=>{
    return(
        <>
            <h1>Autoridades Registradas</h1>

            <table>
                <thead>
                    <th>Instituto</th>
                    <th>Tipo</th>
                    <th>Nombre</th>
                    <th>Firma</th>
                    <th>Editar</th>
                </thead>
                <tbody>
                    <tr>
                        <td>UNERG</td>
                        <td>Decano AIS</td>
                        <td>Leopoldo Lopez</td>
                        <td><a href="/comingSoon"> ver firma </a> </td>
                        <td> <a onClick={()=> onNavClick('Editar Proceso')} href="/#">  <FontAwesomeIcon icon={faPenToSquare} style={{color:"#FFC300"}} />  </a> </td>
                    </tr>
                    <tr>
                        <td>Calabozo</td>
                        <td>Decano AIS</td>
                        <td>Carlos Camacaro</td>
                        <td><a href="/comingSoon"> ver firma </a> </td>
                        <td> <a href="/EditAu">  <FontAwesomeIcon icon={faPenToSquare} style={{color:"#FFC300"}} />  </a> </td>
                    </tr>
                </tbody>
            </table>
            </>

    )
}

export default ListadoAu;