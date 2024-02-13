import React, { Fragment } from "react";
import "./Peliculas.css";
import usePeliculas from "./usePeliculas.js";
import PeliculaListado from "./PeliculaListado.jsx";
import PeliculaDetalles from "./PeliculaDetalles.jsx";

const Peliculas = () => {
  const url = "https://swapi.py4e.com/api/films";

  const { peliculas, pelicula, errores, buscando, buscarPelicula } =
    usePeliculas(url);

  return (
    <Fragment>
      <h2>Películas de Star Wars</h2>
      <div id='contenedor'>
        <div id='detallePelicula'>
          <PeliculaListado listado={peliculas} accion={buscarPelicula} />
        </div>
        <div id='peliculas'>
          <PeliculaDetalles informacion={pelicula} />
        </div>
      </div>
    </Fragment>
  );
};

export default Peliculas;
