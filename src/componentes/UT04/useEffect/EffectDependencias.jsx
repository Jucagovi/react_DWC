import React, { Fragment, useState, useEffect } from "react";
import EffectDependenciasFrutas from "./EffectDependenciasFrutas";
import EffectDependenciasVerduras from "./EffectDependenciasVerduras";
import {
  generarFrutaAleatorio,
  generarVerduraAleatorio,
} from "../../../bibliotecas/funciones";

const EffectDependencias = () => {
  // Valores iniciales.
  const frutasIncial = [];
  const verdurasInicial = [];
  // Creación de estados.
  const [frutas, setFrutas] = useState(frutasIncial);
  const [verduras, setVerduras] = useState(verdurasInicial);
  // Funciones que modificarán los estados.
  const generarFruta = () => {
    const fruta = generarFrutaAleatorio();
    setFrutas([...frutas, fruta]);
  };

  const generarVerdura = () => {
    const verdura = generarVerduraAleatorio();
    setVerduras([...verduras, verdura]);
  };

  const borrar = () => {
    setFrutas(frutasIncial);
    setVerduras(verdurasInicial);
  };
  // Creación el useEffect con dependencias.
  useEffect(() => {
    console.log(`El número de frutas ha aumentado hasta: ${frutas.length}.`);
  });

  return (
    <Fragment>
      <h2>Uso de dependencias con useEffect.</h2>
      <p>
        <button
          onClick={() => {
            borrar();
          }}
        >
          Borrar vegetales
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            generarFruta();
          }}
        >
          Aumentar frutas
        </button>
      </p>
      <EffectDependenciasFrutas datos={frutas} />
      <p>
        <button
          onClick={() => {
            generarVerdura();
          }}
        >
          Aumentar verduras
        </button>
      </p>
      <EffectDependenciasVerduras datos={verduras} />
    </Fragment>
  );
};

export default EffectDependencias;
