import React, { useContext } from "react";
import { ContextoDeDatos } from "../contextos/DatosContexto.jsx";

const useContextoDatos = () => {
  const contexto = useContext(ContextoDeDatos);
  return contexto;
};

export default useContextoDatos;
