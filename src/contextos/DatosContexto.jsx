import React, { createContext, useState, useEffect } from "react";
import { getDatos } from "../bibliotecas/traerDatos.js";

/************ Cear un contexto global
 * Dará acceso a un conjunto de componentes a todo
 * lo contenido en el contexto ya sean variables,
 * estados o funciones.
 *
 * Será necesario hacer tres cosas:
 *    ->  crear el contexto con la función createContext
 *        y dotarlo de contenido a compartir,
 *    ->  crea un proveedor (componente) que se
 *        encargará de compartir la información y
 *    ->  utilizar useContext para usar el contexto
 *        en aquellos componentes que lo necesiten.
 *
 */

/** Se crea el contexto con el método createContext()
 * Es necesario que sea de ámbito global, por lo
 * que debe declararse fuera del componente.
 */
const ContextoDeDatos = createContext();

const DatosContexto = ({ children }) => {
  /** Otra forma de acceder al children en props  */
  //const { children } = props;

  const valoresInciciales = [];

  /** Creación de los estados para el contexto. */
  const [planetas, setPlanetas] = useState(valoresInciciales);
  const [personajes, setPersonajes] = useState(valoresInciciales);

  /** Se declaran funciones asíncronas para obtener datos. */
  const obtenerPlanetas = async () => {
    try {
      const informacion = await getDatos("https://swapi.py4e.com/api/planets");
      setPlanetas(informacion);
    } catch (error) {
      throw error;
    }
  };

  const obtenerPersonajes = async () => {
    try {
      const informacion = await getDatos("https://swapi.py4e.com/api/people");
      setPersonajes(informacion);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    /** Se obtienen los datos en la carga del contexto. */
    obtenerPersonajes();
  }, []);

  const datosAExportar = { personajes, planetas, obtenerPlanetas };

  return (
    <ContextoDeDatos.Provider value={datosAExportar}>
      {children}
    </ContextoDeDatos.Provider>
  );
};

/** Se exporta el componente como siempre. */
export default DatosContexto;
/** Además hay que exportar el contexto
 * para usarlo con el hook useContext().*/
export { ContextoDeDatos };
