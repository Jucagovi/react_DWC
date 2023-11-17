import React, { useState } from "react";
import "./FormularioObjetoControl.css";
import Errores from "./Errores";

function FormularioObjetoControl() {
  // Crear un estado inicial (objeto con valores por defecto para evitar errores al dibujar).
  const valoresIniciales = {
    nombre: "",
    apellidos: "",
    correo: "",
  };

  const erroresIniciales = [];
  // Estado para los valores del discente.
  const [discente, setDiscente] = useState(valoresIniciales);
  const [errores, setErrores] = useState(erroresIniciales);

  // Función para actualizar el estado con los datos del evento.
  const actualizarDato = (evento) => {
    // Se obtienen los datos necesarios de evento que lanza esta función: el input.
    const { name, value } = evento.target;
    // Se asigna al estado.
    setDiscente({ ...discente, [name]: value });
  };

  // Función que valida el valor de un input.
  const validarDato = (elemento) => {
    // Desestructuración del objeto target (situado dentro de evento).
    const { name, value } = elemento;
    // Variable con los errores de cada elemento.
    let erroresElemento = [];
    // Comprobaciones para cada uno de los elementos del formulario.
    // Campo nombre.
    if (name === "nombre") {
      // Se comprueba si tiene algo escrito.
      if (!value.length) {
        erroresElemento = [
          ...erroresElemento,
          `El campo ${name} debe tener un valor.`,
        ];
      }
      // Se comprueba si cumple los requisitos.
      if (!/^[a-zA-Z][a-zA-Z0-9 ]{2,20}$/.test(value))
        erroresElemento = [
          ...erroresElemento,
          `El nombre debe tener entre dos y veinte cacateres y no puede comenzar con un número.`,
        ];
    }
    // Campo apellidos.
    if (name === "apellidos") {
      // Se comprueba si tiene algo escrito.
      if (!value.length)
        erroresElemento = [
          ...erroresElemento,
          `El campo ${name} debe tener un valor.`,
        ];
      // Se comprueba si cumple los requisitos.
      if (!/^[a-zA-Z][a-zA-Z0-9 ]{2,30}$/.test(value))
        erroresElemento = [
          ...erroresElemento,
          `Los apellidos deben tener entre dos y treinta caracteres y no pueden comenzar con un número.`,
        ];
    }
    // Campo correo electrónico
    if (name === "correo") {
      // Se comprueba si tiene algo escrito.
      if (!value.length)
        erroresElemento = [
          ...erroresElemento,
          `El campo correo electrónico debe tener un valor.`,
        ];
    }
    // Se devuelve el listado de errores (o ninguno).
    return erroresElemento;
  };

  // Función para validar el formulario.
  const validarFormulario = (evento) => {
    // Se accede al elemento <form> que contiene el listado de todos sus elementos (elements).
    const formulario = evento.target.parentNode;
    // Array vacío para guardar todos los errores del formulario.
    let erroresListado = [];
    // Se recorre el formulario comprobando cada elemento.
    for (var i = 0; i < formulario.elements.length - 1; i++) {
      // Validar dato devuelve un array con los errores de ese elemento.
      let erroresElemento = validarDato(formulario.elements[i]);
      // Se comprueba si hay errores o no (aplicando un estilo).
      erroresElemento.length !== 0
        ? formulario.elements[i].classList.add("error")
        : formulario.elements[i].classList.remove("error");
      // Se añaden los errores (si existen) de cada elemento a erroresListado.
      erroresListado = [...erroresListado, ...erroresElemento];
    }
    // Se cambia el valor el estado por lo errores producidos.
    setErrores(erroresListado);
    // Se devuelva un booleano para poder realizar una acción tras la comprobación.
    // Si no hay errores se devuelve true.
    return erroresListado.length === 0;
  };

  return (
    <React.Fragment>
      <div id='principal'>
        <div>
          <h2>Discente con Formularios</h2>
          <form>
            <label htmlFor='nombre'>Nombre:</label>
            <input
              name='nombre'
              className='conEstilo'
              type='text'
              placeholder='Escribe tu nombre.'
              value={discente.nombre}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            <br />
            <label htmlFor='apellidos'>Apellidos:</label>
            <input
              name='apellidos'
              className='conEstilo'
              type='text'
              placeholder='Escribe tus apellidos.'
              value={discente.apellidos}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            <br />
            <label htmlFor='modulos'>Correo:</label>
            <input
              name='correo'
              className='conEstilo'
              type='text'
              placeholder='Escribe tu correo electrónico.'
              value={discente.correo}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            <br />
            <input
              type='button'
              value='Enviar datos'
              onClick={(evento) => {
                if (validarFormulario(evento)) {
                  console.log("Envío datos al servidor...");
                }
              }}
            />
          </form>
        </div>
        <div>
          <h2>Control de errores.</h2>
          <Errores erroresMostrar={errores} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default FormularioObjetoControl;
