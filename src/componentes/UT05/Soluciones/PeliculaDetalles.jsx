import React, { Fragment } from "react";

const PeliculaDetalles = ({ informacion }) => {
  return (
    <Fragment>
      {Object.keys(informacion).length !== 0 ? (
        <>
          <h3>{informacion.title}</h3>
          <h4>Dirigida por {informacion.director}</h4>
          <h4>Producida por${informacion.producer}</h4>
          <p>{informacion.opening_crawl}</p>
        </>
      ) : (
        <h3>Selecciona una película.</h3>
      )}
    </Fragment>
  );
};

export default PeliculaDetalles;
