import React, { Fragment, useContext } from "react";
import { ContextoDeDatos } from "../../../contextos/DatosContexto";
import Personaje from "./Personaje";

const Personajes = () => {
  /** Se utliliza el contexto */
  const { personajes } = useContext(ContextoDeDatos);
  return (
    <Fragment>
      <h2>Personajes de la saga de Star Wars.</h2>
      {personajes.length ? (
        personajes.map((valor, indice, array) => {
          return (
            <Personaje
              key={indice}
              nombre={valor.name}
              color_pelo={valor.hair_color}
            />
          );
        })
      ) : (
        <p>No se han encontrado personajes en la galaxia...</p>
      )}
    </Fragment>
  );
};

export default Personajes;
