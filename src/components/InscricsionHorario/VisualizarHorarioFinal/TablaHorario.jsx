import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const dias = ['Lunes','Martes','Miércoles','Jueves','Viernes']

const localizer = momentLocalizer(moment);

const MyWeeklySchedule = ({ eventos }) => {
  const defaultDate = new Date(2025, 0, 20); // Fecha de inicio de la semana

  return (
    <div className="calendar">
      <div className="semanaDias">
        <span className="hora">Hora</span>
        {dias.map((dia,index)=>(
          <span className="dias" key={index} > {dia} </span>
        ))}
      </div>
      <Calendar
        localizer={localizer}
        events={eventos}
        defaultDate={defaultDate}
        defaultView={Views.WORK_WEEK}
        views={{ work_week: true }} // Solo mostrar días de lunes a viernes
        startAccessor="start"
        endAccessor="end"
        toolbar={false} // Esconde la barra de tiempo
        min={new Date(2025, 0, 20, 7, 45)} // Hora mínima (8:00 AM)
        max={new Date(2025, 0, 20, 16, 0)} // Hora máxima (8:00 PM)
        step={45} // Intervalo de tiempo (45 minutos)
        timeslots={1} // Número de intervalos por hora
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: '#fff',
            color: 'black',
            fontSize: 'bold',
            borderRadius: '5px',
            padding: '2rem'
          },
        })}
      />
    </div>
  );
};

export default MyWeeklySchedule;
