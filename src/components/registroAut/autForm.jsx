import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuildingColumns,  faSignature, faAddressCard, faUser, faArrowsDownToPeople,faPlus } from '@fortawesome/free-solid-svg-icons';

import Style from "../../../public/estilosGenerales/formularios.module.css";


import Submit from '../../particulas/SubmitButtons/Submit';



const AutForm = ({onhandleAddType,onhandleGetAutList})=>{
    return(

        <div className={Style.ScreenContainer} >
        
        <form action='/AddAutority' method='POST' className={Style.form} encType="multipart/form-data"> 

        <h1 className={Style.h1}>Registro de Autoridades</h1>

        
        <div className={Style.VerListado} onClick={onhandleGetAutList} >Ver Listado de Autoridades</div>


        <label htmlFor="Institucion"><strong className={Style.strong}> Institucion </strong></label>
        <label className={Style.label} htmlFor="Institucion">
            <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#5271ff"}} size='lg' />
            <select className={Style.input} name="Institucion" required id="Institucion">
                <option >Seleccione Institucion</option>
                <option value="UNERG">UNERG</option>
                <option value="Calabozo">Calabozo</option>
                <option value="Zaraza">Zaraza</option>
            </select>
        </label>

        <label htmlFor="tipoAut"><strong className={Style.strong} > Tipo de Autoridad </strong></label>
        <label className={Style.label} htmlFor="tipoAut">
            <FontAwesomeIcon icon={faArrowsDownToPeople} style={{color: "#5271ff"}} size='lg' />
            <select className={Style.input} name="tipoAutoridad" required id="tipoAut" >
                <option  >Seleccione tipo</option>
                <option value="Rector">Rector</option>
                <option value="Rector">Decano Ais </option>
                <option value="Rector">Decano Medicina SJM</option>
            </select>
            <FontAwesomeIcon icon={faPlus} onClick={onhandleAddType} className={Style.add} style={{color: "#FFC300"}} title="agregar Autoridad"/> 
        </label>

        <label htmlFor="nombre"><strong className={Style.strong} >Nombre</strong></label>
        <label htmlFor="nombre" className={Style.label} >
            <FontAwesomeIcon icon={faUser} style={{color: "#5271ff"}} size='lg' />
            <input type="text" id='nombre' className={Style.input} name='nombre' maxLength={30} required placeholder='Leopoldo Gomez' />
        </label>

        <label htmlFor="firma"><strong className={Style.strong}  >Firma Digital</strong></label>
        <label htmlFor="firma" className={Style.label} >
            <FontAwesomeIcon icon={faSignature} style={{color: "#5271ff"}} size='lg'/>
            <input type="file" name='firma' id='firma' className={Style.input} required />
        </label>

        <Submit/>

        </form>
        </div>
    )
}

export default AutForm;