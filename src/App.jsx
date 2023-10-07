import React from "react";
import "./App.css";
import Contenedor from "./componentes/UT02/posicionamiento/Contenedor.jsx";
import Contenido from "./componentes/UT02/posicionamiento/Contenido.jsx";
import MasContenido from "./componentes/UT02/posicionamiento/MasContenido.jsx";
import Pie from "./componentes/UT02/posicionamiento/Pie.jsx";

function App() {
  return (
    <React.Fragment>
      <Contenedor>
        <Contenido />
        <MasContenido />
      </Contenedor>
      <Pie />
    </React.Fragment>
  );
}

export default App;
