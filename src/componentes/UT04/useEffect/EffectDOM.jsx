import React, { useState, useEffect } from "react";
import EffectDOMColoricos from "./EffectDOMColoricos.jsx";
import EffectDOMContador from "./EffectDOMContador.jsx";

const EffectDOM = () => {
  /**
   * Manejar eventos en el DOM (suscripción a eventos).
   *
   * Si se añade un evento al document (objeto padre del DOM) ese evento
   * queda por encima del componente, es decir, afectará a todo el DOM
   * y no sólo a ese componente.
   *
   * Será muy interesante, por tanto, quitar ese evento al desmontar el
   * componente.
   *
   ***/

  // Estado para desmontar el componente.
  const valorInicial = true;
  const [mostrar, setMostrar] = useState(valorInicial);

  return (
    <React.Fragment>
      <div>
        <h2>Desmontando componentes.</h2>
        <button
          onClick={() => {
            setMostrar(!mostrar);
          }}
        >
          Quitar/poner colores
        </button>
        {/* Se utilia el operador lógico para montar/demontar el componente. */}
        {/* {mostrar && <EffectDOMColoricos />} */}
        {/* Las dos siguientes líneas realizan la misma operación: mostrar/ocultar el componente. */}
        {/* {mostrar ? <EffectDOMContador /> : null} */}
        {mostrar && <EffectDOMContador />}
      </div>
    </React.Fragment>
  );
};

export default EffectDOM;
