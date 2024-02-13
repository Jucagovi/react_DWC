import React, { Fragment } from "react";
import "./App.css";
import DatosContexto from "./contextos/DatosContexto";
import Personajes from "./componentes/UT05/contexto/Personajes.jsx";
import Planetas from "./componentes/UT05/contexto/Planetas.jsx";
import Peliculas from "./componentes/UT05/Soluciones/Peliculas.jsx";
import AlmacenamientoLocal from "./componentes/UT06/AlmacenamientoLocal.jsx";
import ProveedorLocal from "./contextos/ProveedorLocal.jsx";

function App() {
  return (
    <Fragment>
      <h1>Contextos con useContext.</h1>
      <ProveedorLocal>
        <AlmacenamientoLocal />
      </ProveedorLocal>
    </Fragment>
  );
}

export default App;
