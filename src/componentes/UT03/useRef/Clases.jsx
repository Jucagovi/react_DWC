import React, { useRef } from "react";
import "./Clases.css";

const Clases = () => {
  // Referencias a elementos del VirtualDOM.
  const contenedor1Ref = useRef(null);
  const contenedor2Ref = useRef(null);

  // Funciones para los eventos de los botones.
  const ponerRojo = () => {
    contenedor1Ref.current.classList.toggle("rojo");
  };
  const ponerAzul = () => {
    contenedor2Ref.current.classList.toggle("azul");
  };
  const limpiarClases = () => {
    contenedor1Ref.current.classList.remove("rojo");
    contenedor2Ref.current.classList.remove("azul");
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={ponerRojo}>Clase rojo</button>
        <button onClick={ponerAzul}>Clase azul</button>
        <button onClick={limpiarClases}>Limpiar clases</button>
      </div>
      <div>
        <p ref={contenedor1Ref}>Este es el contenedor 1.</p>
        <p ref={contenedor2Ref}>Este es el contenedor 2.</p>
      </div>
    </React.Fragment>
  );
};

export default Clases;
