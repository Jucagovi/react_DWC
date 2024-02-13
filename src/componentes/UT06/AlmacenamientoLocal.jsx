import React, { Fragment } from "react";
import useContextoLocal from "../../hooks/useContextoLocal.js";
import ValorObjeto from "./ValorObjeto.jsx";

const AlmacenamientoLocal = () => {
  const { datos, iniciarDatos, obtenerDatos, borrarDatos } = useContextoLocal();
  return (
    <Fragment>
      <h2>Uso de Local/Session Storage.</h2>
      <div>
        <button
          onClick={() => {
            iniciarDatos();
          }}
        >
          Guardar datos de inicio
        </button>
        <button
          onClick={() => {
            obtenerDatos();
          }}
        >
          Obtener datos de localStorage
        </button>
        <button
          onClick={() => {
            borrarDatos();
          }}
        >
          Eliminar datos de localStorage
        </button>
      </div>
      <div className='localstorage'>
        <h2>Datos almacebados en LocalStorage</h2>
        {Array.isArray(datos) && datos.length ? (
          datos.map((v, i, a) => {
            return <ValorObjeto key={i} objeto={v} />;
          })
        ) : (
          <p>No se han encontrado datos.</p>
        )}
      </div>
    </Fragment>
  );
};

export default AlmacenamientoLocal;
