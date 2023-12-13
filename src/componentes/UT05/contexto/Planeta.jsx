import React, { Fragment } from "react";

const Planeta = ({ nombre, periodo_orbital }) => {
  return (
    <Fragment>
      <p>
        {nombre} tiene un periodo orbital de {periodo_orbital} días terrestres.
      </p>
    </Fragment>
  );
};

export default Planeta;
