import React from 'react'
import Style from "../../../public/estilosGenerales/formularios.module.css";



const Submit = ()=>{
    return(
        <div className={Style.buttonContainer}>
        
        <button className={Style.Submit}>Guardar</button>

        <input type="reset" className={Style.reset}/>
        
        </div>
    )
}

export default Submit