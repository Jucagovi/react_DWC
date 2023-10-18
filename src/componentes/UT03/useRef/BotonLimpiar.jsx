import React from "react";

const BotonLimpiar = (props) => {
  const limpiarClases = () => {
    props.referencia1.current.classList.remove("rojo");
    props.referencia2.current.classList.remove("azul");
  };
  return (
    <React.Fragment>
      <button onClick={limpiarClases}>Limpiar clases</button>
    </React.Fragment>
  );
};

export default BotonLimpiar;
