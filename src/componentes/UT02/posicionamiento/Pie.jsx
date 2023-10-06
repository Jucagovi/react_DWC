import React from "react";
import "./Pie.css";
import imagen from "../../../assets/copyleft.png";

const Pie = () => {
  let anyo = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer>
        <p>
          Esto es el footer de la página web. <img src={imagen} /> {anyo}
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Pie;
