import React, { useRef } from "react";

const Listado = () => {
  // Parte de Javascript creo una referencia a un componente del Virtual DOM.
  const listadoRef = useRef(null);
  // Compruebo qué es esta referencia y su propiedad "current".
  console.log(listadoRef);
  console.log(listadoRef.current);

  // Funciones para los evento onClick de los botones.
  const anadirElementoInner = () => {
    // 1.- Se añade el código en innerHTML a través de su referencia.
    listadoRef.current.innerHTML += "<li>Nuevo elemento desde innerHTML.</li>";
  };

  const anadirElementoCrear = () => {
    // 1.- Se crea el nodo del tipo element (<p>).
    let li = document.createElement("li");
    // 2.- Se crea el nodo tipo texto.
    let texto = document.createTextNode("Nuevo elemento desde createElement.");
    // 3.- Se introduce el nodo texto en el nodo element.
    li.appendChild(texto);
    // 4.- Se añade el nodo element a través de su referencia.
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
            Añadir elemento con createElement
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
