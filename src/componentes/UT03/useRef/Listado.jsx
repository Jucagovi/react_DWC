import React, { useRef } from "react";

const Listado = () => {
  // Parte de Javascript creo una referencia a un componente del Virtual DOM.
  const listadoRef = useRef(null);
  // Compruebo qué es esta referencia y su propiedad "current".
  //console.log(listadoRef);
  //console.log(listadoRef.current);

  // Funciones para los evento onClick de los botones.
  const anadirElementoInner = () => {
    listadoRef.current.innerHTML += "<li>Nuevo elemento desde innerHTML.</li>";
  };

  const anadirElementoCrear = () => {
    let li = document.createElement("li");
    let texto = document.createTextNode("Nuevo elemento desde createElement.");
    li.appendChild(texto);
    listadoRef.current.appendChild(li);
  };

  return (
    <React.Fragment>
      <div>
        <h2>Listado de elementos a incrementar.</h2>
        <p>
          <button onClick={anadirElementoInner}>
            Añadir elemento con innerHTML
          </button>
        </p>
        <p>
          <button onClick={anadirElementoCrear}>
            Añadir elemento con ccreateElement
          </button>
        </p>
        <ul ref={listadoRef}>
          <li>Este es el elemento inicial.</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Listado;
