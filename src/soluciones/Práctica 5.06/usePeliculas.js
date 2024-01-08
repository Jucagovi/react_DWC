import React, { useState, useEffect } from "react";

const usePeliculas = (url) => {
  const peliculasInciciales = [];
  const peliculaInicial = {};
  const buscandoInicial = true;
  const erroresIniciales = ``;

  const [peliculas, setPeliculas] = useState(peliculasInciciales);
  const [pelicula, setPelicula] = useState(peliculaInicial);
  const [buscando, setBuscando] = useState(buscandoInicial);
  const [errores, setErrores] = useState(erroresIniciales);

  /**   La función getDatos es generalista para consumir promesas.
   *    Debería estar en una biblioteca aparte,
   *    pero para simplificar la entrega la pongo aquí.
   *    ¡¡¡No lo hagas!!!
   *    Recuerda que esta función devuleve la información
   *    dentro de una promesa, por lo que es perfecta
   *    para consumirla con await en un ambiente síncrono (con async).
   */
  const getDatos = (endpoint) => {
    return fetch(endpoint)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        return datos.results;
      })
      .catch((error) => {
        return `Se ha producido un error: ${error.message}`;
      });
  };

  const buscarPelicula = (identificador) => {
    const nuevaPelicula = peliculas.filter((pelicula) => {
      return pelicula.episode_id === identificador;
    });
    setPelicula(nuevaPelicula[0]);
  };

  const obtenerPeliculas = async (origen) => {
    try {
      setBuscando(true);
      const informacion = await getDatos(origen);
      setPeliculas(informacion);
    } catch (error) {
      setErrores(error.message);
    } finally {
      setBuscando(false);
    }
  };

  useEffect(() => {
    obtenerPeliculas(url);
  }, []);

  return { peliculas, pelicula, buscando, errores, buscarPelicula };
};

export default usePeliculas;
