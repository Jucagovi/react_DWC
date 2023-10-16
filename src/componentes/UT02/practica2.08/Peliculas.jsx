import React from "react";
import Pelicula from "./Pelicula";
import fichero from "./objetos/UT02Ejercicio2.json";

const Peliculas = () => {
  console.log(fichero.peliculas); // Compruebo dónde está el array dentro del objeto.
  return (
    <React.Fragment>
      <div className='peliculas'>
        {fichero.peliculas.length
          ? fichero.peliculas.map((objeto) => {
              return (
                <Pelicula
                  key={objeto.id}
                  nombre={objeto.nombre}
                  director={objeto.director}
                  cartelera={objeto.cartelera}
                  clasificacion={objeto.clasificacion}
                >
                  {objeto.resumen}
                </Pelicula>
              );
            })
          : "No se han encontrado películas."}
      </div>
    </React.Fragment>
  );
};

export default Peliculas;
