import React from "react";
import "./App.css";
import Films from "./componentes/UT05/asincronismo/Films.jsx";
import FilmsHook from "./componentes/UT05/asincronismo/FilmsHook.jsx";
import FilmsHookManipular from "./componentes/UT05/asincronismo/FilmsHookManipular.jsx";
import FilmsHookSituacion from "./componentes/UT05/asincronismo/FilmsHookSituacion.jsx";

function App() {
  return (
    <React.Fragment>
      <h1>Usando asincronismo en React.</h1>
      <Films />
      {/* <FilmsHook /> */}
      {/* <FilmsHookManipular /> */}
      {/* <FilmsHookSituacion /> */}
    </React.Fragment>
  );
}

export default App;
