import React, { Fragment, useState, useEffect } from "react";

const TresIntentos = () => {
  const valorInicial = 0;
  // Estado con el número de intentos.
  const [intentos, setIntentos] = useState(valorInicial);

  // Función que cambia el estado.
  const cambio = () => {
    setIntentos(intentos + 1);
  };

  return (
    <Fragment>
      <h2>Intentos: {intentos}</h2>
      {/* Ternaria para controlar la impresión del componente. */}
      {intentos < 3 ? (
        <p>
          <button
            onClick={() => {
              cambio();
            }}
          >
            Intentar adivinar
          </button>
        </p>
      ) : (
        "Ya has agotado tus tres intentos."
      )}
    </Fragment>
  );
};

export default TresIntentos;
