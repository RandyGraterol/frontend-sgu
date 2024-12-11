import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Crearprocesos.css";
import { Toaster, toast } from "sonner";
import { es } from "date-fns/locale/es";
import { registerLocale } from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const CrearProceso = () => {
  registerLocale("es", es);
  const [periodos, setPeriodos] = useState("");
  const [sede, setSede] = useState("");
  const [modalidad, setModalidad] = useState("");
  const [carrera, setCarrera] = useState("");
  const [nombreProceso, setNombreProceso] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleModalidadChange = (event) => {
    const selectedValue = event.target.value;
    setModalidad(selectedValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Formateo de fechas
    const inicio = startDate
      ? startDate.toLocaleDateString("es-ES")
      : "No definido";
    const final = endDate ? endDate.toLocaleDateString("es-ES") : "No definido";

    // Limpiar los campos
    setCarrera("");
    setDateRange([null, null]);
    setNombreProceso("");
    setModalidad("");
    setPeriodos("");
    setSede("");

    const p = `Se registró: ${nombreProceso} en modalidad ${modalidad} en  la sede ${sede} para carrera ${carrera} durante el periodo ${periodos}. Inicio: ${inicio}, Final: ${final}`;
    toast.success(p);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-title">Crear Procesos</h1>

      <label className="label">
        Periodo Académico
        <select
          id="periodos"
          className="select-input"
          value={periodos}
          onChange={(e) => setPeriodos(e.target.value)}
          required
        >
          <option value="" disabled>
            Periodo académico
          </option>
          <option value="20251">20251</option>
          <option value="20252">20252</option>
          <option value="20253">20253</option>
        </select>
      </label>
      <label className="label" htmlFor="nombre">
        Proceso
        <select
          name="nombreProceso"
          required
          className="select-input"
          id="nombre"
          value={nombreProceso}
          onChange={(e) => setNombreProceso(e.target.value)}
        >
          <option value="" disabled>
            Seleccione un proceso
          </option>
          <option value="Proceso de Carga de Horario">
            Proceso de Carga de Horario
          </option>
          <option value="Proceso de Inscripción por carreras Semestrales">
            Proceso de Inscripción por carreras Semestrales
          </option>
          <option value="Proceso de Validación de Inscripción">
            Proceso de Validación de Inscripción
          </option>
        </select>
      </label>
      <label className="label" htmlFor="modalidad">
        Modalidad
        <select
          name="modalidad"
          required
          className="select-input"
          id="modalidad"
          value={modalidad}
          onChange={handleModalidadChange}
        >
          <option value="" disabled>
            Modalidad seleccionada previamente
          </option>
          <option value="Anual">Anual</option>
          <option value="Semestral">Semestral</option>
          <option value="Trimestral">Trimestral</option>
        </select>
      </label>

      <label className="label" htmlFor="sede">
        Sede
        <select
          name="sede"
          required
          className="select-input"
          id="sede"
          value={sede}
          onChange={(e) => setSede(e.target.value)}
        >
          <option value="" disabled>
            Sede
          </option>
          <option value="San Juan de los Morros">San Juan de los Morros</option>
          <option value="Calabozo">Calabozo</option>
          <option value="Maturin">Maturin</option>
        </select>
      </label>

      <label className="label" htmlFor="carrera">
        Carrera - Institución
        <select
          name="carrera"
          required
          className="select-input"
          id="carrera"
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
        >
          <option value="" disabled>
            Carrera seleccionada previamente
          </option>
          <option value="Ing. Informática">Ing. Informática</option>
          <option value="Ing. Informática">Ing. civil</option>
          <option value="Medicina">Medicina</option>
        </select>
      </label>

      <label className="label" htmlFor="fechas">
        <FontAwesomeIcon icon={faCalendar} size="lg" />
        <DatePicker
          selectsRange={true}
          minDate={new Date()}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update);
          }}
          locale="es"
          dateFormat="dd/MM/yyyy"
          required
          className="date-picker"
          withPortal
        />
      </label>

      <button type="submit" className="submit-button">
        Enviar
      </button>
      <Toaster richColors />
    </form>
  );
};

export default CrearProceso;
