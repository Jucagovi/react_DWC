import React from "react";

const Contenedor = (props) => {
  return (
    <React.Fragment>
      <div id='contenedor'>{props.children}</div>
    </React.Fragment>
  );
};

export default Contenedor;
