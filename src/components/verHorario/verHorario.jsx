import React from 'react';
import Style from '../../../public/estilosGenerales/formularios.module.css'
import '../InscricsionHorario/inscripcion.css'
import Styles from './verhorario.module.css'
const Horario =()=>{


    return(
        <>
        

        <div className={Style.ScreenContainer}  >	
            <section className={Styles.DataUser} >
                <h1 className={Style.h1} >Horario de clases</h1>
                <div>
                    <p><strong>CI:</strong> 30336715 Julián Rafael Amer Ojeda </p>
                    <p><strong> CARRERA:</strong> Ingenieria Informática - INGENIERÍA DE SISTEMAS( SAN JUAN DE LOS MORROS ) </p>
                    <p><strong>Perído:</strong> 20242 - Inscripción </p>
                </div>
            </section>
            <table>
                <thead className={Styles.thead} >
                    <tr>
                    <th className={Styles.th} >Cod. Materia</th>
                    <th className={Styles.th} >Nombre Materia</th>
                    <th className={Styles.th} >Sección</th>
                    <th className={Styles.th} >Clase</th>
                    <th className={Styles.th} >Aula</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={Styles.tr} >	
                        <td className={Styles.td}   rowSpan={3} >ID 7322</td>
                        <td className={Styles.td}  rowSpan={3} >Control de Proyectos  </td>
                        <td className={Styles.td}  rowSpan={3} >1</td>
                        <td className={Styles.td} > - </td>
                        <td className={Styles.td} rowSpan={3} >15</td>
                    </tr>
                    <tr className={Styles.tr} >
                        <td className={Styles.td} >NO PRESENCIAL: 08:00AM - 10:00AM </td>
                    </tr>
                    <tr className={Styles.tr} >
                        <td className={Styles.td} > MIÉRCOLES 7:45 AM - 10:00AM </td>
                    </tr>
                    <tr className={Styles.tr} >	
                        <td className={Styles.td}   rowSpan={3} >ID 7322</td>
                        <td className={Styles.td}  rowSpan={3} >Control de Proyectos  </td>
                        <td className={Styles.td}  rowSpan={3} >1</td>
                        <td className={Styles.td} > - </td>
                        <td className={Styles.td} rowSpan={3} >15</td>
                    </tr>
                    <tr className={Styles.tr} >
                        <td className={Styles.td} >NO PRESENCIAL: 08:00AM - 10:00AM </td>
                    </tr>
                    <tr className={Styles.tr} >
                        <td className={Styles.td} > MIÉRCOLES 7:45 AM - 10:00AM </td>
                    </tr>
                    <tr className={Styles.tr} >	
                        <td className={Styles.td}   rowSpan={3} >ID 7322</td>
                        <td className={Styles.td}  rowSpan={3} >Control de Proyectos  </td>
                        <td className={Styles.td}  rowSpan={3} >1</td>
                        <td className={Styles.td} > - </td>
                        <td className={Styles.td} rowSpan={3} >15</td>
                    </tr>
                    <tr className={Styles.tr} >
                        <td className={Styles.td} >NO PRESENCIAL: 08:00AM - 10:00AM </td>
                    </tr>
                    <tr className={Styles.tr} >
                        <td className={Styles.td} > MIÉRCOLES 7:45 AM - 10:00AM </td>
                    </tr>
                    <tr className={Styles.tr} >	
                        <td className={Styles.td}   rowSpan={3} >ID 7322</td>
                        <td className={Styles.td}  rowSpan={3} >Control de Proyectos  </td>
                        <td className={Styles.td}  rowSpan={3} >1</td>
                        <td className={Styles.td} > - </td>
                        <td className={Styles.td} rowSpan={3} >15</td>
                    </tr>
                    <tr className={Styles.tr} >
                        <td className={Styles.td} >NO PRESENCIAL: 08:00AM - 10:00AM </td>
                    </tr>
                    <tr className={Styles.tr} >
                        <td className={Styles.td} > MIÉRCOLES 7:45 AM - 10:00AM </td>
                    </tr>
                </tbody>
            </table>

        </div>

        </>
    )
}

export default Horario;