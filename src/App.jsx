import React from "react";
import "./App.css";
import Contenedor from "./componentes/UT02/practica2.08/Contenedor.jsx";
import Cabecera from "./componentes/UT02/practica2.08/Cabecera.jsx";
import Peliculas from "./componentes/UT02/practica2.08/Peliculas.jsx";
import Contenido from "./componentes/UT02/posicionamiento/Contenido.jsx";
import MasContenido from "./componentes/UT02/posicionamiento/MasContenido.jsx";
import Pie from "./componentes/UT02/posicionamiento/Pie.jsx";

function App() {
  return (
    <React.Fragment>
      {/* <Contenedor titulo='Esto es un nuevo título.' nombre='Feo'>
        <MasContenido />
        Todo es todo
      </Contenedor>
      <Contenido />
      <Pie /> */}

      {/* SOLUCIÓN -> Práctica 2.08 */}

      <Cabecera />
      <Contenedor>
        <Peliculas />
      </Contenedor>
    </React.Fragment>
  );
}

export default App;
