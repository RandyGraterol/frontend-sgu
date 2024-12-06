import React, { useState } from "react";
import "./PeriodosLista.css"; 
import { Toaster, toast } from "sonner";
const Periodos = () => {
  const [periodos, setPeriodos] = useState([
    { numero: 20251, estado: "Activo" },
    { numero: 20242, estado: "Inactivo" },
    { numero: 20243, estado: "Activo" },
    { numero: 20252, estado: "Activo" },
    { numero: 20241, estado: "Inactivo" },
    { numero: 20253, estado: "Activo" },
    { numero: 20261, estado: "Activo" },
    { numero: 20262, estado: "Inactivo" },
    { numero: 20263, estado: "Activo" },
    { numero: 20271, estado: "Activo" }
  ]);

  const [numeroBuscado, setNumeroBuscado] = useState("");
  const [resultados, setResultados] = useState(periodos);

  const cambiarEstado = (numero) => {
    const nuevosPeriodos = periodos.map((periodo) =>
      periodo.numero === numero
        ? {
            ...periodo,
            estado: periodo.estado === "Activo" ? "Inactivo" : "Activo",
          }
        : periodo
    );

    setPeriodos(nuevosPeriodos);

    // Actualiza resultados si hay una búsqueda activa
    if (numeroBuscado) {
      const resultadosFiltrados = nuevosPeriodos.filter(
        (periodo) => periodo.numero === parseInt(numeroBuscado)
      );
      setResultados(resultadosFiltrados);
    } else {
      setResultados(nuevosPeriodos); // Si no hay búsqueda, mostrar todos
    }
  };

  const eliminarPeriodo = (numero) => {
    toast.error(`Se elimino el periodo: ${numero}`, {
      duration: 1000,
    });
    const nuevosPeriodos = periodos.filter(
      (periodo) => periodo.numero !== numero
    );
    setPeriodos(nuevosPeriodos);
    // Actualiza los resultados después de eliminar
    setResultados(nuevosPeriodos);
    setNumeroBuscado("");
  };

  const buscarPeriodo = (e) => {
    e.preventDefault();
    const numero = parseInt(numeroBuscado);
    if (!isNaN(numero)) {
      const resultadosFiltrados = periodos.filter(
        (periodo) => periodo.numero === numero
      );
      setResultados(resultadosFiltrados);
    } else {
      setResultados(periodos); // Si no es un número, mostrar todos
    }
  };

  return (
    <div className="tabla-container">
      <div className="form-busqueda">
        <form onSubmit={buscarPeriodo} className="">
          <input
            type="number"
            value={numeroBuscado}
            onChange={(e) => setNumeroBuscado(e.target.value)}
            placeholder="Buscar por periodo"
            className="input-busqueda"
          />
          <button type="submit" className="boton-busqueda">
            Buscar
          </button>
        </form>
        <button type="submit" className="boton-crear">
          {" "}
          {/* redigir a crear periodo */}
          Crear periodo
        </button>
      </div>

      <table className="tabla-periodos">
        <thead>
          <tr>
            <th>Periodo</th>
            <th>Estatus</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {resultados.map((periodo, index) => (
            <tr
              key={index}
              className={
                periodo.estado === "Activo" ? "bg-activo" : "bg-inactivo"
              }
            >
              <td className="periodos">{periodo.numero}</td>
              <td>{periodo.estado}</td>
              <td>
                <button
                  onClick={() => cambiarEstado(periodo.numero)}
                  className={
                    periodo.estado === "Activo"
                      ? "bg-inactivo-boton"
                      : "bg-activo-boton"
                  }
                >
                  Cambiar Estado
                </button>
                <button
                  onClick={() => eliminarPeriodo(periodo.numero)}
                  className="tabla-periodos-eliminar"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster richColors visibleToasts="1" position="top-right" />
    </div>
  );
};

export default Periodos;
