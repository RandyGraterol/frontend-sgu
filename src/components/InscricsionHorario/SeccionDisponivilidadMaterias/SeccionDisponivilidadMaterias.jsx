// SeccionDisponivilidadMaterias.js
import './seccionDisponivilidadMaterias.css';

export const SeccionDisponivilidadMaterias = ({ data, resultado, onAddEvent }) => {
  if (resultado === "vacio") {
    return (
      <section className={`SeccionDisponivilidadMaterias`}>
        Selecione Una Materia
      </section>
    );
  } else {
    if (data[resultado].DatosMateria.length) {
      return (
        <section className={`SeccionDisponivilidadMaterias`}>
          {data[resultado].DatosMateria.map((element, index) => (
            <div 
              key={index} 
              className={`SeccionHoras`} 
              onClick={() => {
                onAddEvent({
                  title: data[resultado].Nombre.toUpperCase(),
                  Seccion:element.Seccion,
                  start: new Date(2025, 0, 20,10,0),
                  end: new Date(2025, 0, 20,12,15),
                  allDay: false,
                });
              }}
            >
              <p className="Nombre">{data[resultado].Nombre.toUpperCase()}</p>
              <p>Seccion = <b>{element.Seccion}</b></p>
              <div className="contentHora">
                <p className="contentDia-1">{element.HorarioPrimario.dia}</p> = 
                <div className="Horas">
                  <b className="horaDinamica-1">{element.HorarioPrimario.horaprimaria}</b> a 
                  <b className="horaDinamica-1">{element.HorarioPrimario.horasecundaria}</b>
                </div>
              </div>
              <div className="contentHora">
                <p className="contentDia-2">{element.HorarioSecundario.dia}</p> = 
                <div className="Horas">
                  <b className="horaDinamica-2">{element.HorarioSecundario.horaprimaria}</b> a 
                  <b className="horaDinamica-2">{element.HorarioSecundario.horasecundaria}</b>
                </div>
              </div>
              <p>U.C = <b>{data[resultado].UnidadesCredito}</b></p>
              <p>Cupos = <b>{element.CuposDisponibles}</b></p>
              <p>Aula = <b>{element.Aula}</b></p>
            </div>
          ))}
        </section>
      );
    }
  }
};


