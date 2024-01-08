import React, { Fragment } from "react";

const PeliculaListado = ({ listado, accion }) => {
  return (
    <Fragment>
      {listado.length ? (
        listado.map((valor, indice, array) => {
          return (
            <p
              onClick={() => {
                accion(valor.episode_id);
                //console.log(valor.episode_id);
              }}
              key={valor.episode_id}
              id={valor.episode_id}
            >
              {valor.title}
            </p>
          );
        })
      ) : (
        <p>No se han encontrado películas.</p>
      )}
    </Fragment>
  );
};

export default PeliculaListado;
