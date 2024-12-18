import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare,faLayerGroup,faMinus, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Submit from '../../particulas/SubmitButtons/Submit'
import Style from  './LP.module.css'

const LP = ({onHandleEditProcess})=>{
    const [status,changeStatus] = useState(true);
    const [gest,gestPro] = useState(false);
    const [mig, gestMig] = useState(false)

    const trigger = ()=>{

        changeStatus(!status)

    }

    const tiggerGest = ()=>{
        gestPro(!gest)
    }

    const triggerMig = ()=>{
        gestMig(!mig)
    }

    return(
        <div className={Style.center}>
            <h1 className={Style.h1} >Administrar Procesos</h1>

            <h2 className={Style.h2}>Filtros</h2>
            <div id={Style.filterContainer}>
                
                <select id="" className={Style.filter} >
                    <option  >modalidad / Periodo</option>
                    <option value="">Semestral / 2025-II</option>
                    <option value="">Anual / 2025-I</option>
                    <option value="">Trimestral / 2025-II</option>
                </select>
                

                <select name="" id="" className={Style.filter}>
                    <option  >carrera - Institucion </option>
                    <option value=""> Ing Informatica / San juan de los morros</option>
                    <option value="">Medicina / Calabozo</option>
                    <option value="">etc</option>
                </select>

                <label htmlFor="search" className={Style.filter}>
                    Nombre
                    <input type="search" id="search" className={Style.search}/>
                </label>



            </div>

            <table className={Style.table} >
                <thead>
                    <tr>
                    <th className={Style.th}  >Periodo</th>
                    <th className={Style.th}  >Modalidad</th>
                    <th className={Style.th}  >Carrera - Institucion</th>
                    <th className={Style.th}  >Nombre</th>
                    <th className={Style.th}  >Fecha de Inicio</th>
                    <th className={Style.th}  >Fecha de Cierre</th>
                    <th className={Style.th}  >Status</th>
                    <th className={Style.th} >Gestionar</th>
                    <th className={Style.th} >Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Style.td} >2025-I</td>
                        <td className={Style.td} >Semestral</td>
                        <td className={Style.td} >Ing Informatica - UNERG</td>
                        <td className={Style.td} >Inscripciones</td>
                        <td className={Style.td} >01-06-2004</td>
                        <td className={Style.td} >06-06-2004</td>
                        {status?(
                            <td className={Style.active } onClick={trigger}>Activo</td>
                        ):( <td onClick={trigger} className={Style.inactive} >Inactivo</td>)}
                        <td className={Style.lastTd} > {status ? (<FontAwesomeIcon onClick={tiggerGest} icon={faLayerGroup} size="lg" style={{color:"#FFC300"}} />):(<FontAwesomeIcon icon={faLayerGroup} size="lg" style={{color:"#ff3c00"}} /> ) }   </td>
                        <td className={Style.lastTd} >  <FontAwesomeIcon onClick={onHandleEditProcess}  icon={faPenToSquare} size="lg" style={{color:"#FFC300"}} /> </td>
                    </tr>
                    <tr>
                        <td className={Style.td} >2025-I</td>
                        <td className={Style.td} >Semestral</td>
                        <td className={Style.td} >Ing Informatica - Calabozo</td>
                        <td className={Style.td} >Migracion de horario</td>
                        <td className={Style.td} >10-06-2004</td>
                        <td className={Style.td} >015-06-2004</td>
                        {status ?(
                        <td onClick={trigger} className={Style.inactive} >Inactivo</td>
                        ):(<td onClick={trigger} className={Style.active}>Activo</td>)}
                        <td className={Style.lastTd} > {status ? (<FontAwesomeIcon icon={faLayerGroup} size="lg" style={{color:"#ff3c00"}} />   ):( <FontAwesomeIcon onClick={triggerMig} icon={faLayerGroup} size="lg" style={{color:"#FFC300"}} />  )} </td>
                        <td className={Style.lastTd}>  <FontAwesomeIcon onClick={onHandleEditProcess}  icon={faPenToSquare} size="lg" style={{color:"#FFC300"}} /> </td>
                    </tr>
                    
                </tbody>
            </table>

            {gest ? (
              
            <table>
                <thead>
                    <tr>
                        <th className={Style.th} colSpan={7}>carrera: Ing Sistemas</th>
                        <th className={Style.th} colSpan={2}>ocultar gestion <FontAwesomeIcon icon={faMinus} onClick={tiggerGest}  size="lg" style={{color:"#FFC300"}} /></th>
                    </tr>
                    <tr>
                        <th className={Style.th}  colSpan={2}>Fecha</th>
                        <th className={Style.th}  colSpan={3}>Condición</th>
                        <th className={Style.th} >Estuidantes por <br /> inscribir</th>
                        <th className={Style.th} >Estudiantes <br /> inscritos</th>
                        <th className={Style.th} >Estudiantes sin <br /> inscribir</th>
                        <th className={Style.th} >Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={Style.td}  colSpan={2}>lunes 03-03-25</td>
                        <td className={Style.td}  colSpan={3}>lisos con Promedio mayor o igual a 8 </td>
                        <td className={Style.td} >404</td>
                        <td className={Style.td} >290</td>
                        <td className={Style.td} >114</td>
                        <td className={Style.inactive} >Inctivo</td>
                    </tr>
                    <tr>
                        <td className={Style.td}  colSpan={2}>Martes 04-03-25</td>
                        <td className={Style.td}  colSpan={3}>lisos con Promedio entre 6 y 8 </td>
                        <td className={Style.td} >256</td>
                        <td className={Style.td} >38</td>
                        <td className={Style.td} ></td>
                        <td className={Style.active} >Activo</td>
                    </tr>
                    <tr>
                        <td className={Style.td}  colSpan={2}>Miercoles 05-03-25</td>
                        <td className={Style.td}  colSpan={3}>De 1 a 3 materias reprobadas y con promedio mayor o = a 8 </td>
                        <td className={Style.td} >122</td>
                        <td className={Style.td} ></td>
                        <td className={Style.td} ></td>
                        <td className={Style.inactive} >Inactivo</td>
                    </tr>
                    <tr>
                        <td className={Style.td}  colSpan={2}>jueves 06-03-25</td>
                        <td className={Style.td}  colSpan={3}>con mas de 3 materias reprobadas y con promedio entre 6 y 8 </td>
                        <td className={Style.td} >538</td>
                        <td className={Style.td} ></td>
                        <td className={Style.td} ></td>
                        <td className={Style.inactive} >Inactivo</td>
                    </tr>
                    <tr>
                        <td className={Style.td}  colSpan={2}>Viernes 07-03-25</td>
                        <td className={Style.td}  colSpan={3}>con promedio menor a 6</td>
                        <td className={Style.td} >103</td>
                        <td className={Style.td} ></td>
                        <td className={Style.td} ></td>
                        <td className={Style.inactive} >Inactivo</td>
                    </tr>
                </tbody>
            </table>):(
                <hr />
            )
            }

            { mig && 
            
            <form action="" style={{marginBottom:'20px'}} className={Style.form} >
                    <h2 className={Style.h2} >Migracion de horario</h2>

                    <label className={Style.label}  htmlFor="horario" >
                        <strong className={Style.strong} >Ingrese horario</strong>

                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'4px', width:'100%'}}>
                        <FontAwesomeIcon icon={faCalendarDays} size="lg" style={{color:"#5271ff" }} />
                        <input type="file" id="horario" name="horario" className={Style.input} required />
                        </div>
                    </label>

                <Submit/>

            </form>

            }
            
            </div>


    )
}

export default LP;