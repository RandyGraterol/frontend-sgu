import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare,faLayerGroup,faMinus, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Submit from '../../particulas/SubmitButtons/Submit';
import styles from  '../../styles/stylesGenerales.module.css';
import useWindowSize from '../../hooks/windowSize.jsx';
import {useModal} from '../../hooks/modalWindow.jsx';


const LP = ({onHandleEditProcess})=>{
    const [status,changeStatus] = useState(true);
    const [gest,gestPro] = useState(false);
    const [mig, gestMig] = useState(false);
    const { width } = useWindowSize();
    const {openModal,VentanaModal} = useModal();

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
        <div className={styles.tablaContainer}>
            <h1 className={styles.titulo}>Administrar Procesos</h1>
            <div className={styles.containerFilter}> 
                <select id="" className={styles.containerSelect}>
                    <option  >Modalidad / Periodo</option>
                    <option value="">Semestral / 2025-II</option>
                    <option value="">Anual / 2025-I</option>
                    <option value="">Trimestral / 2025-II</option>
                </select>
                

                <select name="" id="" className={styles.containerSelect}>
                    <option  >Carrera - Institucion </option>
                    <option value=""> Ing Informatica / San juan de los morros</option>
                    <option value="">Medicina / Calabozo</option>
                    <option value="">etc</option>
                </select>

               <div className={styles.containerBuscar}>
                    <input className={styles.containerInput} type="search" id="search" placeholder='  Nombre'/>
               </div>
            </div>

            <table className={styles.styledTable}>
                <thead>
                    <tr>
                    <th>Periodo</th>
                    <th>Modalidad</th>
                    <th>Carrera - Institucion</th>
                    <th>Nombre</th>
                    <th>Fecha de Inicio</th>
                    <th>Fecha de Cierre</th>
                    <th>Status</th>
                    <th>Gestionar</th>
                    <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2025-I</td>
                        <td>Semestral</td>
                        <td>Ing Informatica - UNERG</td>
                        <td>Inscripciones</td>
                        <td>01-06-2004</td>
                        <td>06-06-2004</td>
                        {status?(
                            <td className={styles.active } onClick={trigger}>Activo</td>
                        ):( <td onClick={trigger} className={styles.inactive} >Inactivo</td>)}
                        <td> {status ? (<FontAwesomeIcon onClick={tiggerGest} icon={faLayerGroup} size="lg" style={{color:"#FFC300"}} />):(<FontAwesomeIcon icon={faLayerGroup} size="lg" style={{color:"#ff3c00"}} /> ) }   </td>
                        <td>  <FontAwesomeIcon onClick={onHandleEditProcess}  icon={faPenToSquare} size="lg" style={{color:"#FFC300"}} /> </td>
                    </tr>
                    <tr>
                        <td>2025-I</td>
                        <td>Semestral</td>
                        <td>Ing Informatica - Calabozo</td>
                        <td>Migracion de horario</td>
                        <td>10-06-2004</td>
                        <td>015-06-2004</td>
                        {status ?(
                        <td onClick={trigger} className={styles.inactive} >Inactivo</td>
                        ):(<td onClick={trigger} className={styles.active}>Activo</td>)}
                        <td> {status ? (<FontAwesomeIcon icon={faLayerGroup} size="lg" style={{color:"#ff3c00"}} />   ):( <FontAwesomeIcon onClick={triggerMig} icon={faLayerGroup} size="lg" style={{color:"#FFC300"}} />  )} </td>
                        <td>  <FontAwesomeIcon onClick={onHandleEditProcess}  icon={faPenToSquare} size="lg" style={{color:"#FFC300"}} /> </td>
                    </tr>
                </tbody>
            </table>

            {gest ? (
              
            <table className={styles.styledTable}>
                <thead>
                    <tr>
                        <th colSpan={7}>carrera: Ing Sistemas</th>
                        <th colSpan={2}>ocultar gestion <FontAwesomeIcon icon={faMinus} onClick={tiggerGest}  size="lg" style={{color:"#FFC300"}} /></th>
                    </tr>
                    <tr>
                        <th colSpan={2}>Fecha</th>
                        <th colSpan={3}>Condición</th>
                        <th>Estuidantes por <br /> inscribir</th>
                        <th>Estudiantes <br /> inscritos</th>
                        <th>Estudiantes sin <br /> inscribir</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}>lunes 03-03-25</td>
                        <td colSpan={3}>lisos con Promedio mayor o igual a 8 </td>
                        <td>404</td>
                        <td>290</td>
                        <td>114</td>
                        <td className={styles.inactive} >Inctivo</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Martes 04-03-25</td>
                        <td colSpan={3}>lisos con Promedio entre 6 y 8 </td>
                        <td>256</td>
                        <td>38</td>
                        <td></td>
                        <td className={styles.active} >Activo</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Miercoles 05-03-25</td>
                        <td colSpan={3}>De 1 a 3 materias reprobadas y con promedio mayor o = a 8 </td>
                        <td>122</td>
                        <td></td>
                        <td></td>
                        <td className={styles.inactive} >Inactivo</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>jueves 06-03-25</td>
                        <td colSpan={3}>con mas de 3 materias reprobadas y con promedio entre 6 y 8 </td>
                        <td>538</td>
                        <td></td>
                        <td></td>
                        <td className={styles.inactive} >Inactivo</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Viernes 07-03-25</td>
                        <td colSpan={3}>con promedio menor a 6</td>
                        <td>103</td>
                        <td></td>
                        <td></td>
                        <td className={styles.inactive} >Inactivo</td>
                    </tr>
                </tbody>
            </table>):(
                <hr />
            )
            }

            { mig && 
            
            <form action="" style={{marginBottom:'20px'}}>
                    <h2>Migracion de horario</h2>

                    <label htmlFor="horario" >
                        <strong>Ingrese horario</strong>

                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', gap:'4px', width:'100%'}}>
                        <FontAwesomeIcon icon={faCalendarDays} size="lg" style={{color:"#5271ff" }} />
                        <input type="file" id="horario" name="horario" required />
                        </div>
                    </label>

                <Submit/>

            </form>
            }
  <div className={styles.Universal}>
  <div className = {styles.tabla_mobile}>
    <div className = {styles.fila}>
      <div className = {styles.columna}>
        <div className = {styles.header}>Periodo</div>
        <div className = {styles.contenido}>2025-I</div>
        <div className = {styles.contenido}>2022-I</div>
      </div>    
      </div>
  </div>
  <div className = {styles.tabla_mobile}>
    <div className = {styles.fila}>
      <div className = {styles.columna}>
        <div className = {styles.header}>Modalidad</div>
        <div className = {styles.contenido}>Semestral</div>
        <div className = {styles.contenido}>Anual</div>
      </div>    
      </div>
      <div className = {styles.tabla_mobile}>
    <div className = {styles.fila}>
      <div className = {styles.columna}>
        <div className = {styles.header}>Carrera - Institucion</div>
        <div className = {styles.contenido}>Ing Informatica - UNERG</div>
        <div className = {styles.contenido}>Medicina - UNERG</div>
      </div>    
        <div className = {styles.tabla_mobile}>
    <div className = {styles.fila}>
      <div className = {styles.columna}>
        <div className = {styles.header}>Nombre</div>
        <div className = {styles.contenido}>Inscripción</div>
        <div className = {styles.contenido}>Carnetización</div>
      </div>    
        <div className = {styles.tabla_mobile}>
    <div className = {styles.fila}>
      <div className = {styles.columna}>
        <div className = {styles.header}>Fecha de inicio</div>
        <div className = {styles.contenido}>01-06-2004</div>
        <div className = {styles.contenido}>01-05-2007</div>
      </div>
        <div className = {styles.tabla_mobile}>
    <div className = {styles.fila}>
      <div className = {styles.columna}>
        <div className = {styles.header}>Fecha de cierre</div>
        <div className = {styles.contenido}>06-06-2004</div>
        <div className = {styles.contenido}>06-06-2007</div>
      </div>    
        <div className = {styles.tabla_mobile}>
    <div className = {styles.fila}>
      <div className = {styles.columna}>
        <div className = {styles.header}>Status</div>
        <div className = {styles.contenido}>Activo</div>
        <div className = {styles.contenido}>Inactivo</div>
      </div>
        <div className = {styles.tabla_mobile}>
    <div className = {styles.fila}>
      <div className = {styles.columna}>
        <div className = {styles.header}>Gestionar</div>
      </div>
      <div className = {styles.icon}>
       {status ? (<FontAwesomeIcon icon={faLayerGroup} size="lg" style={{color:"#ff3c00"}} />   ):( <FontAwesomeIcon onClick={triggerMig} icon={faLayerGroup} size="lg" style={{color:"#FFC300"}} />  )} </div>

      </div>
  </div>
        <div className = {styles.tabla_mobile}>
    <div className = {styles.fila}>
      <div className = {styles.columna}>
        <div className = {styles.header}>Editar</div>
      </div>
      </div>
  </div>        
      </div>
  </div>
      <div className = {styles.icon}>  
      <FontAwesomeIcon onClick={onHandleEditProcess}  icon={faPenToSquare} size="lg" style={{color:"#FFC300"}} /> 
      </div>
      </div>
  </div>    
      </div>
  </div>
      </div>
  </div>
      </div>
  </div>
  </div>
</div>
  </div>
)
}

export default LP;