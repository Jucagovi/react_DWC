import React, { Fragment } from "react";
import Film from "./Film.jsx";
/** Se importa el hook creado. */
import useDatosSituacion from "../../../hooks/useDatosSituacion.js";

const FilmsHookSituacion = () => {
  /** Se extrae la información del hook. */
  const { datos, setDatos, cargando } = useDatosSituacion(
    "https://swapi.py4e.com/api/films"
  );
  return (
    <Fragment>
      <h3>Películas de Star Wars.</h3>
      <p>
        <button
          onClick={() => {
            setDatos([]);
          }}
        >
          Borrar películas
        </button>
      </p>
      <article id='peliculas'>
        {/* Se comprueba si el estado tiene datos. */}
        {cargando ? (
          <p>Buscando películas en la galaxia...</p>
        ) : (
          datos.map((valor, indice, array) => {
            return (
              <Film
                key={indice}
                titulo={valor.title}
                director={valor.director}
                descripcion={valor.opening_crawl}
              />
            );
          })
        )}
      </article>
    </Fragment>
  );
};

export default FilmsHookSituacion;
