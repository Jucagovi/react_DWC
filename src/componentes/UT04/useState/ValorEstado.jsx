import React, { Fragment } from "react";

const ValorEstado = (props) => {
  const { estadoMostrar } = props;
  return (
    <Fragment>
      <div className='estado'>
        <h2>Valor del estado actual.</h2>
        <pre>{JSON.stringify(estadoMostrar, null, 2)}</pre>
      </div>
    </Fragment>
  );
};

export default ValorEstado;
