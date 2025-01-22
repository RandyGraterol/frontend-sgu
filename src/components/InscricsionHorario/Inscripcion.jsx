import { useState} from 'react'
import { BoxSelect } from './Select/BoxSelect';
import { SeccionDisponivilidadMaterias } from './SeccionDisponivilidadMaterias/SeccionDisponivilidadMaterias'
import {BoxButton} from './BoxButton/BoxButton'
import MyWeeklySchedule from './VisualizarHorarioFinal/TablaHorario'
import './VisualizarHorarioFinal/visualizarHorarioFinal.css'
import './inscripcion.css'

const Inscripcion = () => {
  const materias = [
    {
      id: 1,
      Nombre: 'MatematicaI',
      UnidadesCredito: 4,
      DatosMateria : [{
                  HorarioPrimario: { dia:'Martes',
                                      horaprimaria :'10:00AM',
                                     horasecundaria: '12:15PM'},
                  HorarioSecundario: { dia: 'Miercoles',
                                      horaprimaria :'8:30AM',
                                     horasecundaria: '10:00AM'},
                  CuposDisponibles: 50,
                  Seccion: '1',
                  Aula: 'Ais-12'},
                  {
                  HorarioPrimario: { dia:'Lunes',
                                      horaprimaria :'10:00AM',
                                     horasecundaria: '12:15PM'},
                  HorarioSecundario: { dia: 'Viernes',
                                      horaprimaria :'8:30AM',
                                     horasecundaria: '10:00AM'},
                  CuposDisponibles: 20,
                  Seccion: '2',
                  Aula: 'Ais-7'}
                  ]
    },
    {
      id: 2,
      Nombre: 'Sistema Numerico',
      UnidadesCredito: 3,
       DatosMateria : [{
                  HorarioPrimario: { dia:'Jueves',
                                      horaprimaria :'10:00AM',
                                     horasecundaria: '12:15PM'},
                  HorarioSecundario: { dia: 'Viernes',
                                      horaprimaria :'8:30AM',
                                     horasecundaria: '10:00AM'},
                  CuposDisponibles: 50,
                  Seccion: '1',
                  Aula: 'Ais-11'},
                  {
                  HorarioPrimario: { dia:'Martes',
                                      horaprimaria :'10:00AM',
                                     horasecundaria: '12:15PM'},
                  HorarioSecundario: { dia: 'Viernes',
                                      horaprimaria :'8:30AM',
                                     horasecundaria: '10:00AM'},
                  CuposDisponibles: 20,
                  Seccion: '2',
                  Aula: 'Ais-16'}
                  ]
    },
    {
      id: 3,
      Nombre: 'ProgramacionI',
      UnidadesCredito: 4,
       DatosMateria : [{
                  HorarioPrimario: { dia:'Lunes',
                                      horaprimaria :'10:00AM',
                                     horasecundaria: '12:15PM'},
                  HorarioSecundario: { dia: 'Miercoles',
                                      horaprimaria :'8:30AM',
                                     horasecundaria: '10:00AM'},
                  CuposDisponibles: 50,
                  Seccion: '1',
                  Aula: 'Ais-13'}
                  ]
    },
    {
      id: 4,
      Nombre: 'Fisica II',
      UnidadesCredito: 4,
      DatosMateria : [{
                  HorarioPrimario: { dia:'Lunes',
                                      horaprimaria :'10:00AM',
                                     horasecundaria: '12:15PM'},
                  HorarioSecundario: { dia: 'Jueves',
                                      horaprimaria :'8:30AM',
                                     horasecundaria: '10:00AM'},
                  CuposDisponibles: 50,
                  Seccion: '1',
                  Aula: 'Ais-2'},
                  {
                  HorarioPrimario: { dia:'Miercoles',
                                      horaprimaria :'10:00AM',
                                     horasecundaria: '12:15PM'},
                  HorarioSecundario: { dia: 'Viernes',
                                      horaprimaria :'8:30AM',
                                     horasecundaria: '10:00AM'},
                  CuposDisponibles: 20,
                  Seccion: '2',
                  Aula: 'Ais-5'}
                  ]
    },
  ];
  const [filtro, setFiltro] = useState("vacio");
  const [buscar, setBuscar] = useState("vacio");
  const filtrar = (e) => {
    setFiltro(e.target.value); 
  }
  const busqueda = () =>{
    const unidad = document.querySelector('.SelectMateria').value;
    setBuscar(unidad);
  }
const [events, setEvents] = useState([]);

  const addNewEvent = (event) => {
    setEvents([...events, event]);
  };
  return (
    <div className="ContenedorInscripcion">
      <BoxSelect filtro={filtro} busqueda={busqueda} materias={materias} botonCambio={filtrar} />
      <SeccionDisponivilidadMaterias onAddEvent={addNewEvent} data={materias} resultado={buscar} />
      <MyWeeklySchedule eventos={events}/>
      <BoxButton />
    </div>
  );
};
export default Inscripcion;