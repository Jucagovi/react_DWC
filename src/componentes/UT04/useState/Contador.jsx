import React, { Fragment, useState } from "react";

function Contador() {
  // Se crea el estado del componente.
  let [contador, setContador] = useState(0);
  /* Funciones asociadas al estado.
   *    Se crean el mismo componente ya que dependen del estado.
   *    Si forman parte del núcleo del componente se declaran en el componente.
   */
  const incremento = () => {
    setContador(contador + 1); // Una sola actualización por ámbito.
    //contador++; // No hay redibujado ya que no se está utilizando la función setContador.
    console.log(contador);
  };
  const decremento = () => {
    setContador(contador - 1);
    //contador--;
    console.log(contador);
  };

  // Se crea el código JSX.
  return (
    // Si se importa Fragment ya no es necesario la notación de punto del objeto React.
    <Fragment>
      <div className='App-header'>
        {/* Se muestra el estado del componente. */}
        <h1>{contador}</h1>
        {/* <h1>{contador < 0 ? "0" : contador}</h1> */}
        <p>
          {/* Se asignan los eventos a los botones. */}
          <button onClick={incremento}>Incrementar</button>
          <button onClick={decremento}>Decrementar</button>
        </p>
      </div>
    </Fragment>
  );
}
/* ************************************************
 *   La función setContador es una función asíncrona por ese motivo no tiene
 *   un comportamiento síncrono (el valor de contador no coincide).
 *   Esto es un funcionamiento normal.
 *************************************************** */
export default Contador;
