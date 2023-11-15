import React, { useState } from "react";
import {
  generarNombreAleatorio,
  generarApellidosAleatorio,
} from "../../../bibliotecas/funciones.js";
import ObjetosMuestra from "./ObjetosMuestra.jsx";

function Objetos() {
  const estadoInicial = [];
  //const objeto = { nombre: "", apellidos: "" };
  let [prueba, setPrueba] = useState(estadoInicial);

  const addObjeto = () => {
    // Se genera el objeto con el nombre de forma aleatoria.
    let objeto = {
      nombre: generarNombreAleatorio(),
      apellidos: `${generarApellidosAleatorio()} ${generarApellidosAleatorio()}`,
    };
    setPrueba([...prueba, objeto]);
  };

  return (
    <React.Fragment>
      <button onClick={addObjeto}>Añadir objeto</button>
      <div>
        {prueba.length ? (
          prueba.map((valor, indice) => {
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
      {/* Imprimir el estado con formato JSON (Objeto) para comprobar. */}
      <div className='estado'>
        <p>Valor del estado actual.</p>
        <pre>{JSON.stringify(prueba, null, 2)}</pre>
      </div>
    </React.Fragment>
  );
}

export default Objetos;
