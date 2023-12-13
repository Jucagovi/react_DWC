import React, { Fragment } from "react";

const Personaje = ({ nombre, color_pelo }) => {
  return (
    <Fragment>
      <p>
        {nombre}{" "}
        {color_pelo === "n/a"
          ? `no tiene pelo`
          : `tiene el pelo de color ${color_pelo}`}
        .
      </p>
    </Fragment>
  );
};

export default Personaje;
