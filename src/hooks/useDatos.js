import React, { useState, useEffect } from "react";
import { getDatos } from "../bibliotecas/traerDatos.js";

const useDatos = (url) => {
  const valoresInciciales = [];
  /** El valor de url se pasa ahora por parámetro. */
  /** Creación del estado para las películas. */
  const [datos, setDatos] = useState(valoresInciciales);

  /** Se declara una función asíncrona para obtener los datos. */
  const obtenerDatos = async () => {
    /** Se gestionan los errores con un try-catch */
    try {
      const informacion = await getDatos(url);
      setDatos(informacion);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    /** Se obtienen los datos */
    obtenerDatos();
  }, []);

  return { datos };
};

export default useDatos;
