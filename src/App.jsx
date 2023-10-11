import React from "react";
import "./App.css";
import Contenedor from "./componentes/UT02/posicionamiento/Contenedor.jsx";
import Contenido from "./componentes/UT02/posicionamiento/Contenido.jsx";
import MasContenido from "./componentes/UT02/posicionamiento/MasContenido.jsx";
import Pie from "./componentes/UT02/posicionamiento/Pie.jsx";

function App() {
  return (
    <React.Fragment>
      <Contenedor titulo='Esto es un nuevo título.' nombre='Feo'>
        <MasContenido />
        Todo es todo
      </Contenedor>
      <Contenido />
      <Pie />
    </React.Fragment>
  );
}

export default App;
