import React, { useState } from "react";
import { generarVerduraAleatorio } from "../../../bibliotecas/funciones.js";

function Verduras() {
  const valorInicial = ["Apio", "Calabacín", "Pimiento", "Calabaza", "Cebolla"];

  const [verduras, setVerduras] = useState(valorInicial);

  const addVerdura = (nuevaVerdura) => {
    //setVerduras([nuevaVerdura]); // ¡¡¡CUIDADAO!!! -> Sustituyo a todo el array.
    setVerduras([...verduras, nuevaVerdura]);
  };
  const deleteVerdura = (nuevaVerdura) => {
    const nuevasVerduras = verduras.filter((verdura) => {
      return verdura !== nuevaVerdura;
    });
    setVerduras(nuevasVerduras);
  };
  const updateVerdura = (nuevoNombre) => {
    const nuevasVerduras = verduras.map((verdura) => {
      return verdura === nuevoNombre ? `${verdura} <-- ¡Cambiado!` : verdura;
    });
    setVerduras(nuevasVerduras);
  };

  const limpiarVerdura = () => {
    setVerduras([]);
  };

  const iniciarVerdura = () => {
    setVerduras(valorInicial);
  };
  return (
    <React.Fragment>
      <div className='App-header'>
        <h1>Verduras</h1>
        <p>
          <button
            onClick={() => {
              addVerdura(generarVerduraAleatorio());
            }}
          >
            Añadir
          </button>
          <button
            onClick={() => {
              deleteVerdura("Pimiento");
            }}
          >
            Borrar
          </button>
          <button
            onClick={() => {
              updateVerdura("Cebolla");
            }}
          >
            Actualizar
          </button>
          <button onClick={limpiarVerdura}>Limpiar</button>
          <button onClick={iniciarVerdura}>Iniciar</button>
        </p>
        <div>
          {verduras.map((verdura, indice) => {
            // Uso el índice como key para que no salte el "warning" por consola.
            return <p key={indice}>{verdura}</p>;
          })}
        </div>
        <div className='estado'>
          <p>Valor del estado actual.</p>
          <pre>{JSON.stringify(verduras, null, 3)}</pre>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Verduras;
