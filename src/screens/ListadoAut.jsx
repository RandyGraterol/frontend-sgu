import React from "react";
import ListadoAu from '../components/listadoAu/listadoAut';

const ListadoAutt = ({onhandleEditAut})=>{
    return(

        <>
            <ListadoAu onhandleEditAut={onhandleEditAut} />
        </>

    )
}

export default ListadoAutt;