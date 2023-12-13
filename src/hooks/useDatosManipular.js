import React, { useState, useEffect } from "react";
import { getDatos } from "../bibliotecas/traerDatos.js";

const useDatosManipular = (url) => {
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

  /** Las funciones que modifican el estado nunca deben salir
   * componente donde se ha creado ese estado.
   * La mejor manera de hacer esto es exportando una función
   * que ejecute, en su interior, el setter del estado.
   */
  const borrarDatos = () => {
    setDatos(valoresInciciales);
  };

  useEffect(() => {
    /** Se obtienen los datos */
    obtenerDatos();
  }, []);

  return { datos, borrarDatos };
};

export default useDatosManipular;
