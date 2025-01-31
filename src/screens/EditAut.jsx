import React from 'react';
import EditAu  from '../components/editar/editarAu.jsx';

const EditAut = ({onhandleAddType})=>{
    return(
        <>

        <EditAu onhandleAddType={onhandleAddType} />
     
        </>
    )
}


export default EditAut;