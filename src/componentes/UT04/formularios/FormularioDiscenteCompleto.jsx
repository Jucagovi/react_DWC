import React, { Fragment, useState } from "react";
import ValorEstado from "../useState/ValorEstado.jsx";

function FormularioDiscenteCompleto() {
  // Crear un estado inicial (objeto con valores por defecto para evitar errores al dibujar).
  const valoresIniciales = {
    nombre: "",
    apellidos: "",
    correo: "",
    desestructuro: "",
    condiciones: "",
    genero: "",
    rugby: "",
    formula1: "",
    videojuegos: "",
  };
  // Estado para los valores del discente.
  const [discente, setDiscente] = useState(valoresIniciales);

  const actualizarDato = (evento) => {
    // Se obtienen los datos necesarios de evento que lanza esta función: el input.
    // Dos maneras de hacerlo (son equivalentes):
    // La primera indigna de uno de mis discentes (comentada para evitar errores):
    /* const name = evento.target.name;
    const value = evento.target.value; */
    // La segunda de forma profesional:
    const { name, value } = evento.target;
    // Se asignan al estado.
    setDiscente({ ...discente, [name]: value });
  };

  // La cosa empieza a complicarse con los elementos checkbox,
  // por eso se hace una función especial para este elemento.
  const actualizarDatoCheck = (evento) => {
    const { name } = evento.target;
    const value = discente[name] ? "" : evento.target.value;
    setDiscente({ ...discente, [name]: value });
  };

  return (
    <Fragment>
      <div className='App-header'>
        <h1>Discente con Formularios</h1>
        <form>
          <label htmlFor='nombre'>Nombre:</label>
          <input
            name='nombre'
            className='conEstilo'
            type='text'
            placeholder='Escribe tu nombre.'
            // Se asigna el valor del estado (que es un objeto).
            value={discente.nombre}
            // Se asigna el evento que va a manejar ese dato.
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
          <h3>Acceso a un seleccionable</h3>
          <select
            name='genero'
            className='conEstilo'
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          >
            <option value=''>No seleccionado</option>
            <option value='femenino'>Femenino</option>
            <option value='masculino'>Masculino</option>
            <option value='no definido'>No definido</option>
            <option value='otro'>Otro</option>
          </select>
          <h3>Acceso a un radiobutton</h3>
          <label>
            <input
              name='desestructuro'
              type='radio'
              // El valor no se obtiene esta vez desde el estado,
              // ya que el valor será seleccionado (valores finitos).
              value='sí'
              // Checked sólo admite un booleano. Se obtiene del
              // resultado de comprobar si su valor ("sí" en este caso)
              // coicide con el valor del estado.
              checked={discente.desestructuro === "sí"}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            Sé utiliar desestructuración de objetos.
          </label>
          <br />
          <label>
            <input
              name='desestructuro'
              type='radio'
              value='no'
              checked={discente.desestructuro === "no"}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            No sé utiliar desestructuración de objetos.
          </label>
          <br />
          <label>
            <input
              name='desestructuro'
              type='radio'
              value='a veces'
              checked={discente.desestructuro === "a veces"}
              onChange={(evento) => {
                actualizarDato(evento);
              }}
            />
            Sólo cuando quiero.
          </label>
          <h3>Acceso a un único checkbox</h3>
          <label>
            <input
              name='condiciones'
              type='checkbox'
              id='topping'
              value='aceptadas'
              // Opción para una cadena de texto.
              // Si la comparación es correcta, se marca el checkbox.
              checked={discente.condiciones === "aceptadas"}
              // Opción para un booleano.
              // Si contiene datos es verdadero, si no, es falso.
              //checked={discente.condiciones}
              onChange={(evento) => {
                actualizarDatoCheck(evento);
              }}
            />
            Acepto las condiciones de uso de DWC.
          </label>

          <h3>Acceso a múltiples checkbox</h3>
          <label>
            <input
              name='rugby'
              type='checkbox'
              id='rugby'
              value='rugby'
              checked={discente.rugby === "rugby"}
              onChange={(evento) => {
                actualizarDatoCheck(evento);
              }}
            />
            Rugby
          </label>
          <label>
            <input
              name='formula1'
              type='checkbox'
              id='formula1'
              value='formula1'
              checked={discente.formula1 === "formula1"}
              onChange={(evento) => {
                actualizarDatoCheck(evento);
              }}
            />
            Fórmula 1
          </label>
          <label>
            <input
              name='videojuegos'
              type='checkbox'
              id='videojuegos'
              value='videojuegos'
              checked={discente.videojuegos === "videojuegos"}
              onChange={(evento) => {
                actualizarDatoCheck(evento);
              }}
            />
            Videojuegos
          </label>
          <br />
          <button
            onClick={(evento) => {
              // Un input <button> dentro de una etiqueta <form> genera por defecto en evento
              // omSubmit recargando la página (no queremos eso). Para solucionarlo se puede
              // utilizar un <input type='button' /> o evitar el comportamiento por defecto
              // con evento.preventDefault();
              evento.preventDefault();
              setDiscente(valoresIniciales);
            }}
          >
            Borrar formulario.
          </button>
          <input
            type='button'
            value='Borrar Formulario'
            onClick={() => {
              setDiscente(valoresIniciales);
            }}
          />
        </form>
        <br />
        {/* Imprimir el estado con formato JSON (Objeto) para comprobar. */}
        <ValorEstado estadoMostrar={discente} />
      </div>
    </Fragment>
  );
}

/* 
La gestión de formularios se puede volver en un terrible dolor de cabeza
si son formularios muy complicados. Al igual que sucedía con las rutas,
es preferible utilizar una biblioteca externa como Formik (https://formik.org/).
Esto liberará de todo el siguiente código.
*/

export default FormularioDiscenteCompleto;
