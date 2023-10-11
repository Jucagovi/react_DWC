import React from "react";
import "./Contenedor.css";

const Contenedor = (props) => {
  //Aquí no hay nada
  return (
    <React.Fragment>
      <div id='contenedor'>
        <h2>{props.titulo ? props.titulo : "Esto es un título genérico."}</h2>
        <h3>Contenedor de los datos de la aplicación {props.nombre}</h3>
        <div className='flotante'>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default Contenedor;
