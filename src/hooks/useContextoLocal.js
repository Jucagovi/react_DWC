import React, { useContext } from "react";
import { ContextoLocal } from "../contextos/ProveedorLocal.jsx";

const useContextoLocal = () => {
  const contexto = useContext(ContextoLocal);
  return contexto;
};

export default useContextoLocal;
