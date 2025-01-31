import React from "react";
import LP from "../components/listadoProcesos/LP";

const ListPro = ({onHandleEditProcess,onHandleRegistrarProcesos})=>{
    return(
    <>
        <LP onHandleEditProcess={onHandleEditProcess} onHandleRegistrarProcesos={onHandleRegistrarProcesos} />
    </>
    )
}

export default ListPro;