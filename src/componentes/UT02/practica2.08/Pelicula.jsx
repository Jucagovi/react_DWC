import React from "react";
import sinImagen from "../assets/imagen-no-encontrada.png";

const Pelicula = (props) => {
  let sinTexto = "Sin especificar";
  return (
    <React.Fragment>
      <div className='pelicula'>
        <div className='imagen'>
          <img src={props.cartelera ? props.cartelera : sinImagen} />
        </div>
        <div className='titulo'>
          <h2>{props.nombre ? props.nombre : sinTexto}</h2>
          <h3>Género {props.clasificacion ? props.clasificacion : sinTexto}</h3>
          <h3>Dirigida por {props.director ? props.director : sinTexto}</h3>
        </div>
        <div className='contenido'>
          {props.children ? props.children : sinTexto}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pelicula;
