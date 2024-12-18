import React from "react";
import LP from "../components/listadoProcesos/LP";

const ListPro = ({onHandleEditProcess})=>{
    return(
    <>
        <LP onHandleEditProcess={onHandleEditProcess} />
    </>
    )
}

export default ListPro;