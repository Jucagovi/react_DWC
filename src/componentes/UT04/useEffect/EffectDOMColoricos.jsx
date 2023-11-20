import React, { Fragment, useState, useEffect } from "react";
import "./EffectDOMColoricos.css";

const EffectDOMColoricos = () => {
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

  // Declaración del estado.
  const colorInicial = "";
  const [color, setColor] = useState(colorInicial);

  // Función para modificar el document.
  const cambiarColor = (evento) => {
    if (evento.clientX < window.innerWidth / 2) {
      setColor("red");
    } else {
      setColor("grey");
    }
    console.log(
      `He ejecutado el evento de document en la coordenada X ${evento.clientX}.`
    );
    document.title = `Coordenadas X: ${evento.clientX}, Y: ${evento.clientY}.`;
  };

  useEffect(() => {
    // Se añade el evento al cargar el componente (una sola vez).
    document.addEventListener("click", cambiarColor);
    // Se quita el evento al descargar el componente
    // (y también antes de la realizar el código del useEffect).
    return () => {
      document.removeEventListener("click", cambiarColor);
      console.log(`Se ha quitado el evento del document.`);
      document.title = `Título inicial.`;
    };
    // Se está poniendo un evento, por lo que tan sólo se debe ejecutar una vez.
  }, []);
  return (
    <Fragment>
      <div id='colores' className={color}>
        Soy un div que cambia de color.
      </div>
    </Fragment>
  );
};

export default EffectDOMColoricos;
