import React, { Fragment } from "react";

// Se usa la desestructuración en la declaración de parámetros (nivel 2 de uso de la desestructuración).
const Errores = ({ erroresMostrar }) => {
  // La desestructuración de arriba es equivalente a la siguiente línea:
  //const { erroresMostrar } = props;
  // Que a su vez equivale al método tradicional:
  //const erroresMostrar = props.erroresMostrar;
  // Con un sólo valor no se aprecia la utilidad de este método, pero ¿y si fueran cinco valores?
  return (
    <Fragment>
      <div id='errores'>
        {erroresMostrar.length
          ? erroresMostrar.map((valor, indice) => {
              return <h3 key={indice}>{valor}</h3>;
            })
          : "No se han encontrado errores en el formulario."}
      </div>
    </Fragment>
  );
};

export default Errores;
