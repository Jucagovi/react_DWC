import React, { Fragment } from "react";

const EffectDependenciasVerduras = (props) => {
  const { datos } = props;
  return (
    <Fragment>
      <div id='verduras'>
        <h2>Listado de verduras</h2>
        {datos.length
          ? datos.map((valor, indice) => {
              return <p key={indice}>{valor}</p>;
            })
          : "No hay verduras en el listado."}
      </div>
    </Fragment>
  );
};

export default EffectDependenciasVerduras;
