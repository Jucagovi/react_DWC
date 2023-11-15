import React, { Fragment } from "react";

const ObjetosMuestra = (props) => {
  const { usuarios } = props;
  return (
    <Fragment>
      <div className='listadoDeObjetos'>
        {usuarios.length ? (
          usuarios.map((valor, indice) => {
            return (
              <p key={indice}>
                {valor.apellidos}, {valor.nombre}
              </p>
            );
          })
        ) : (
          <p>No existen usuarios/as todavía.</p>
        )}
      </div>
    </Fragment>
  );
};

export default ObjetosMuestra;
