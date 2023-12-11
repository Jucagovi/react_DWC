import React, { Fragment } from "react";
import Film from "./Film.jsx";
/** Se importa el hook creado. */
import useDatosManipular from "../../../hooks/useDatosManipular.js";

const FilmsHookManipular = () => {
  /** Se extrae la información del hook. */
  const { datos, setDatos } = useDatosManipular(
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
        {datos.length ? (
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
        ) : (
          <p>Buscando películas en la galaxia...</p>
        )}
      </article>
    </Fragment>
  );
};

export default FilmsHookManipular;
