import React, { useState, useEffect, Fragment } from "react";
import Film from "./Film.jsx";
import { getDatos } from "../biblioteca/traerDatos.js";

const Films = () => {
  const valoresInciciales = [];
  const url = "https://swapi.py4e.com/api/films";

  /** Creación del estado para las películas. */
  const [films, setFilms] = useState(valoresInciciales);

  /** Se declara una función asíncrona para obtener los datos. */
  const obtenerDatos = async () => {
    /** Se gestionan los errores con un try-catch */
    try {
      const informacion = await getDatos(url);
      setFilms(informacion);
    } catch (error) {
      throw error;
    }

    /** otra manera de gestionar errores: */
    /* const datos = await getDatos(url).catch((error) => {
      return error;
    }); */
    /** Se utiliza async/await para evitar la nomenclatura
     * de punto (.then, .catch). Es mejor no mezclarlas.
     */
  };

  /**
   * La función que recibe useEffect nunca debe ser async
   * por lo que se debe crear otra función y ejecutarla
   * dentro de la funció nque recibe como parámetro.
   */
  useEffect(() => {
    /** Se obtienen los datos */
    obtenerDatos();
  }, []);

  return (
    <Fragment>
      <h3>Películas de Star Wars.</h3>
      <article id='peliculas'>
        {/* Se comprueba si el estado tiene datos. */}
        {films.length ? (
          films.map((valor, indice, array) => {
            return (
              <Film
                key={indice}
                titulo={valor.title}
                director={valor.director}
                descripcion={valor.opening_crawl}
              />
            );
          })
        ) : (
          <p>Buscando películas en la galaxia...</p>
        )}
      </article>
    </Fragment>
  );
};

export default Films;
