import React from "react";
import "./App.css";
import Contador from "./componentes/UT04/useState/Contador.jsx";
import Mensaje from "./componentes/UT04/useState/Mensaje.jsx";
import Objetos from "./componentes/UT04/useState/Objetos.jsx";
import Verduras from "./componentes/UT04/useState/Verduras.jsx";
import Formulario from "./componentes/UT04/formularios/Formulario.jsx";
import FormularioObjetoControl from "./componentes/UT04/formularios/FormularioObjetoControl.jsx";
import FormularioObjeto from "./componentes/UT04/formularios/FormularioObjeto.jsx";
import FormularioObjetoCompleto from "./componentes/UT04/formularios/FormularioObjetoCompleto.jsx";

function App() {
  return (
    <React.Fragment>
      <h1>Usando estados en React con formularios.</h1>
      {/* <Formulario /> */}
      {/* <FormularioObjeto /> */}
      {/* <FormularioObjetoCompleto /> */}
      <FormularioObjetoControl />
    </React.Fragment>
  );
}

export default App;
