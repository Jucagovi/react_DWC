const generarNombreAleatorio = () => {
  // Listas de nombres y apellidos
  let nombres = [
    "Juan",
    "María",
    "Carlos",
    "Ana",
    "Luis",
    "Laura",
    "Pedro",
    "Carmen",
  ];

  // Devolver un nombre aleatorio
  return nombres[Math.floor(Math.random() * nombres.length)];
};

const generarApellidosAleatorio = () => {
  // Listas de apellidos
  let apellidos = [
    "Gómez",
    "Pérez",
    "Rodríguez",
    "López",
    "Martínez",
    "González",
    "Sánchez",
    "Fernández",
  ];

  // Devolver un apellido aleatorio
  return apellidos[Math.floor(Math.random() * apellidos.length)];
};

const generarVerduraAleatorio = () => {
  // Listas de apellidos
  let verduras = [
    "Acelga",
    "Ajo",
    "Apio",
    "Berro",
    "Berenjena",
    "Calabaza",
    "Cebolla",
    "Coliflor",
    "Chayote",
    "Chícharo",
    "Col",
    "Colifrol",
    "Chile poblano",
    "Ejote",
    "Elote",
    "Espinaca",
    "Jitomate",
    "Lechuga",
    "Pepino",
    "Rábano",
    "Nopales",
    "Verdolagas",
    "Tomate",
    "Zanahoria",
  ];

  // Devolver un apellido aleatorio
  return verduras[Math.floor(Math.random() * verduras.length)];
};

const generarUuidAleatorio = () => {
  return crypto.randomUUID;
};

export {
  generarNombreAleatorio,
  generarApellidosAleatorio,
  generarVerduraAleatorio,
  generarUuidAleatorio,
};
