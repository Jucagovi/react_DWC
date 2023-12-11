import React, { useState, useEffect } from "react";
import { getDatos } from "../componentes/UT05/biblioteca/traerDatos.js";

const useDatosSituacion = (url) => {
  const valoresInciciales = [];
  const cargandoInicial = true;
  /** El valor de url se pasa ahora por parámetro. */
  /** Creación del estado para las películas. */
  const [datos, setDatos] = useState(valoresInciciales);
  const [cargando, setCargando] = useState(cargandoInicial);

  /** Se declara una función asíncrona para obtener los datos. */
  const obtenerDatos = async () => {
    /** Se gestionan los errores con un try-catch */
    try {
      setCargando(true);
      const informacion = await getDatos(url);
      setDatos(informacion);
    } catch (error) {
      throw error;
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    /** Se obtienen los datos */
    obtenerDatos();
  }, []);

  return { datos, setDatos, cargando };
};

export default useDatosSituacion;
