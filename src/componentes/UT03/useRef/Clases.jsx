import React, { useRef } from "react";
import "./Clases.css";
import BotonLimpiar from "./BotonLimpiar";

const Clases = () => {
  // Referencias a elementos del VirtualDOM.
  const contenedor1Ref = useRef(null);
  const contenedor2Ref = useRef(null);

  // Funciones para los eventos de los botones.
  const ponerRojo = () => {
    contenedor1Ref.current.classList.toggle("rojo");
    contenedor2Ref.current.classList.toggle("rojo");
  };
  const ponerAzul = () => {
    contenedor2Ref.current.classList.toggle("azul");
  };

  return (
    <React.Fragment>
      <div>
        <button onClick={ponerRojo}>Clase rojo</button>
        <button onClick={ponerAzul}>Clase azul</button>
      </div>
      <div>
        <BotonLimpiar
          referencia1={contenedor1Ref}
          referencia2={contenedor2Ref}
        />
      </div>
      <div>
        <p ref={contenedor2Ref}>Este es el contenedor 1.</p>
        <p ref={contenedor1Ref}>Este es el contenedor 2.</p>
      </div>
    </React.Fragment>
  );
};

export default Clases;
