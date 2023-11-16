import React from "react";
import "./App.css";
import Contador from "./componentes/UT04/useState/Contador.jsx";
import Mensaje from "./componentes/UT04/useState/Mensaje.jsx";
import Objetos from "./componentes/UT04/useState/Objetos.jsx";
import Verduras from "./componentes/UT04/useState/Verduras.jsx";
import Formulario from "./componentes/UT04/formularios/Formulario.jsx";
import FormularioDiscente from "./componentes/UT04/formularios/FormularioDiscente.jsx";

function App() {
  return (
    <React.Fragment>
      <h1>Usando estados en React</h1>
      {/* <Objetos /> */}
      {/* <Formulario /> */}
      <FormularioDiscente />
    </React.Fragment>
  );
}

export default App;
