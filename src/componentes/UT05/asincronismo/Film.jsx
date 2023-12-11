import React, { Fragment } from "react";

const Film = (props) => {
  const { titulo, descripcion, director } = props;
  return (
    <Fragment>
      <div className='film'>
        <h2>{titulo}</h2>
        <h4>{director}</h4>
        <p>{descripcion}</p>
      </div>
    </Fragment>
  );
};

export default Film;
