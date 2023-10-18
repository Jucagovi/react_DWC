import React from "react";
import "./App.css";
import Contenedor from "./componentes/UT02/practica2.08/Contenedor.jsx";
import Cabecera from "./componentes/UT02/practica2.08/Cabecera.jsx";
import Peliculas from "./componentes/UT02/practica2.08/Peliculas.jsx";
import Contenido from "./componentes/UT02/posicionamiento/Contenido.jsx";
import MasContenido from "./componentes/UT02/posicionamiento/MasContenido.jsx";
import Pie from "./componentes/UT02/posicionamiento/Pie.jsx";
import Listado from "./componentes/UT03/useRef/Listado";
import Clases from "./componentes/UT03/useRef/Clases";

function App() {
  return (
    <React.Fragment>
      <Contenedor titulo='Pruebas con useRef.'>
        Este es mi contenedor de siempre.
        <Clases />
        <Listado />
      </Contenedor>
    </React.Fragment>
  );
}

export default App;
