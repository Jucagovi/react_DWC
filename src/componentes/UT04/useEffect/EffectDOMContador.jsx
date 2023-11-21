import React, { Fragment, useState, useEffect } from "react";

const EffectDOMContador = () => {
  const contadorInicial = 0;
  const [contador, setContador] = useState(contadorInicial);

  useEffect(() => {
    /**
     * Para que funcione el cambio de estado fuera del ámbito del componente
     * es necesario que se realice el cambio como resultado de una función.
     * ***/
    const intervaloId = setInterval(() => {
      setContador((contador) => {
        return contador + 1;
      });
    }, 1000);

    return () => {
      console.log(`Se limpian los efectos generados.`);
      clearInterval(intervaloId);
    };
  }, []);

  /**
   * Para imprimir el valor del estado en cada dibujado del componente
   * genero otro useEffect para ese propósito, ya que el anterior se
   * ejecuta una sola vez.
   */
  useEffect(() => {
    console.log(`El valor del contador es: ${contador}.`);
  });

  return (
    <Fragment>
      <h2>Trabajando con setInterval.</h2>
      <p>El valor del contador es: {contador}</p>
    </Fragment>
  );
};

export default EffectDOMContador;
