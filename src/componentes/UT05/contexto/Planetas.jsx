import React, { Fragment, useContext } from "react";
import { ContextoDeDatos } from "../../../contextos/DatosContexto.jsx";
import useContextoDatos from "../../../hooks/useContextoDatos.js";
import Planeta from "./Planeta.jsx";

const Planetas = () => {
  /** Se importan los elementos del contexto (sólo los necesarios). */
  const { planetas, obtenerPlanetas } = useContext(ContextoDeDatos);
  /** También es posible utilizar un hook para estas tareas (más "profesional"). */
  //const { planetas, obtenerPlanetas } = useContextoDatos();
  return (
    <Fragment>
      <div id='planetas'>
        <h2>Planetas de la saga Star Wars.</h2>
        <button
          onClick={() => {
            obtenerPlanetas();
          }}
        >
          Buscar planetas
        </button>
        {planetas.length ? (
          planetas.map((valor, indice, array) => {
            return (
              <Planeta
                key={indice}
                nombre={valor.name}
                periodo_orbital={valor.orbital_period}
              />
            );
          })
        ) : (
          <p>No se han buscado planetas en la galaxia.</p>
        )}
      </div>
    </Fragment>
  );
};

export default Planetas;
