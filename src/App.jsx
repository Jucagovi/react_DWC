import React from "react";
import "./App.css";
import Contador from "./componentes/UT04/useState/Contador.jsx";
import Mensaje from "./componentes/UT04/useState/Mensaje.jsx";
import Objetos from "./componentes/UT04/useState/Objetos.jsx";
import Verduras from "./componentes/UT04/useState/Verduras.jsx";

function App() {
  return (
    <React.Fragment>
      <h2>useState en React</h2>
      {/* <Contador /> */}
      {/* <Mensaje /> */}
      <Objetos />
      {/* <Verduras /> */}
    </React.Fragment>
  );
}

export default App;
