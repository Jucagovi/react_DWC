import React from "react";
import "./App.css";
import TresIntentos from "./componentes/UT04/TresIntentos.jsx";
import EffectCiclo from "./componentes/UT04/useEffect/EffectCiclo.jsx";
import EffectDOM from "./componentes/UT04/useEffect/EffectDOM.jsx";
import EffectDependencias from "./componentes/UT04/useEffect/EffectDependencias.jsx";
import EffectCronometro from "./componentes/UT04/useEffect/EffectCronometro.jsx";

function App() {
  return (
    <React.Fragment>
      <h1>Usando useEffect en React.</h1>
      {/* Básico. */}
      {/* <EffectCiclo /> */}
      {/* Con dependencias. */}
      {/* <EffectDependencias /> */}
      {/* Accediendo al DOM y limpieza. */}
      <EffectDOM />
    </React.Fragment>
  );
}

export default App;
