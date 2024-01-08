const getDatos = (endpoint) => {
  return fetch(endpoint)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      return datos.results;
    })
    .catch((error) => {
      return `Se ha producido un error: ${error.message}`;
    });
};

const obtenerDatos = async (arrayDeEndpoints) => {
  const promesasArray = arrayDeEndpoints.map(async (valor, indice, array) => {
    return await getDatos(valor);
  });
  const resultados = await Promise.all(promesasArray);
  setNaves(resultados);
};
