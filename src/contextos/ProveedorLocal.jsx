import React, { createContext, useState, useEffect } from "react";

const ContextoLocal = createContext();

const ProveedorLocal = ({ children }) => {
  /**
   *  Gestión de los datos con localStorage / sessionStorage.
   *    --> una base de datos clave-valor,
   *    --> sólo se puede almacenar cadenas de texto,
   *    --> accesible sólo desde la URL desde la que se accede,
   *    --> 10 MiB de capacidad ( 5 MiB para localStorage y otros 5 MB para sessionStorage).
   *
   *
   *  setItem    --> crear una entrada en la base de datos.
   *  getItem    --> obtener una entrada en la base de datos.
   *  removeItem --> indica que valor hay que eliminar (recibe un key cmo parámetro).
   *  key(n)     --> devuelve la clave enésima posición de la base de datos.
   *  clear()    --> borrar la base de datos.
   *
   */

  /** Valores iniciales para los estados. */
  const valorInicial = [];
  const cadenaInicial = "";
  const feosIniciales = [
    {
      nombre: "Albert",
      apellidos: "Einstein",
      modulos: ["DWC", "DWS", "DIW", "DAW"],
    },
    {
      nombre: "Juan",
      apellidos: "López",
      modulos: ["DWC", "DWS"],
    },
  ];

  /** Creación de los estados para el contexto. */
  const [datos, setDatos] = useState(valorInicial);
  const [error, setError] = useState(cadenaInicial);
  const [situacion, setSituacion] = useState(cadenaInicial);

  /** Se declaran funciones asíncronas para obtener datos. */

  const obtenerDatos = () => {
    try {
      const valoresLocal = JSON.parse(localStorage.getItem("datosAlmacenados"));
      setDatos(valoresLocal);
      console.log("Datos obtenidos con éxito.");
      setSituacion("Datos obtenidos con éxito.");
    } catch (error) {
      setError(error.message);
    }
  };

  const guardarDatos = () => {
    try {
      localStorage.setItem("datosAlmacenados", JSON.stringify(datos));
      console.log("Datos guardados con éxito.");
      setSituacion("Datos guardados con éxito.");
    } catch (error) {
      setError(error.message);
    }
  };

  const iniciarDatos = () => {
    try {
      localStorage.setItem("datosAlmacenados", JSON.stringify(feosIniciales));
      console.log("Datos iniciados con éxito.");
      setSituacion("Datos iniciados con éxito.");
    } catch (error) {
      setError(error.message);
    }
  };

  const borrarDatos = () => {
    try {
      localStorage.clear();
      setDatos(valorInicial);
      console.log("Datos eliminados con éxito.");
      setSituacion("Datos eliminados con éxito.");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {}, []);

  const datosAExportar = {
    datos,
    situacion,
    obtenerDatos,
    guardarDatos,
    iniciarDatos,
    borrarDatos,
  };

  return (
    <ContextoLocal.Provider value={datosAExportar}>
      {children}
    </ContextoLocal.Provider>
  );
};

export default ProveedorLocal;
export { ContextoLocal };
