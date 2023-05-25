const nombrecompleto = document.getElementById("nombrecompleto");
const direcciondecorreo = document.getElementById("direcciondecorreo");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const telefono = document.getElementById("telefono");
const personas = document.getElementById("personas");
const peticion = document.getElementById("peticion");
const form = document.getElementById("form");
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', HandleSubmit);

function HandleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);

  // Verifica si hay campos requeridos vacíos
  if (isFormEmpty(form)) {
    alert('Por favor, complete todos los campos del formulario antes de enviar.');
    return;
  }

  let bodyText = `NOMBRE = ${form.get('nombrecompleto')}\n\nCORREO: ${form.get('direcciondecorreo')}\n\nFECHA DE RESERVA: ${form.get('fecha')}\n\nHORA :${form.get('hora')}\n\nTEL :${form.get('telefono')}\n\nPERSONAS :${form.get('personas')}`;

  // Añade la petición solo si no está vacía
  if (form.get('peticion')) {
    bodyText += `\n\nPETICION :${form.get('peticion')}`;
  }

  $buttonMailto.setAttribute('href', `mailto:seba.tr.999@gmail.com?subject=Reserva de ${form.get('nombrecompleto')}&body=${encodeURIComponent(bodyText)}`);
  $buttonMailto.click();

  alert('¡Gracias! Tu reserva ha sido enviada con éxito.');

  // Clear form fields
  this.reset();
}


function isFormEmpty(form) {
  // Verifica si hay campos requeridos vacíos, excepto 'peticion'
  for (let [key, value] of form.entries()) {
    if (!value && key !== 'peticion') {
      return true;
    }
  }
  return false;
}




form.addEventListener("submit", (e) => {
    let mensajes = [];
    const regexNombre = /^[a-zA-Z\s]*$/; // Expresión regular para permitir solo letras y espacios
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^\d{10}$/; // Expresion regular para permitir numeors positivos del 0 al 9

    ocultarError(nombrecompleto);
    ocultarError(direcciondecorreo);
    ocultarError(fecha);
    ocultarError(telefono);
    ocultarError(personas)
    // Ocultar otros mensajes de error aquí

    let errorNombre = "";

    if (nombrecompleto.value === "" || nombrecompleto.value === null) {
        errorNombre = "Se requiere un nombre";
        mensajes.push(errorNombre);
        mostrarError(nombrecompleto, errorNombre);
    } else if (!regexNombre.test(nombrecompleto.value)) {
        errorNombre = "El nombre debe ser válido";
        mensajes.push(errorNombre);
        mostrarError(nombrecompleto, errorNombre);
    }
    
    
    let errorCorreo = "";

    if (direcciondecorreo.value === "" || direcciondecorreo.value === null) {
        errorCorreo = "Se requiere una dirección de correo"; 
        mensajes.push(errorCorreo);
        mostrarError(direcciondecorreo,errorCorreo);
    } else if (!regexEmail.test(direcciondecorreo.value)) {
        errorCorreo = "Dirección de correo inválida";
        mensajes.push(errorCorreo);
        mostrarError(direcciondecorreo, errorCorreo);
    }

    const fechaSeleccionada = new Date(fecha.value);
    const fechaActual = new Date(); // Fecha actual

    if (fechaSeleccionada < fechaActual) {
        mensajes.push("La fecha seleccionada no puede ser anterior a la fecha actual");
        mostrarError(fecha, "La fecha seleccionada no puede ser anterior a la fecha actual");
    }
    let errorTelefono= "";
    if (telefono.value === "" || telefono.value === null) {
        errorTelefono = "Se requiere un número de telefono";
        mensajes.push(errorTelefono);
        mostrarError(telefono,errorTelefono);
    } else if (!regexTelefono.test(telefono.value)) {
        errorTelefono = "Se requiere un numero de telefono de 10 digitos";
        mensajes.push(errorTelefono);
        mostrarError(telefono,errorTelefono);
    } 

    const errorPersonas = "Indique cuantas personas vienen (0 si viene sole)";
    if (personas.value === "" || personas.value === null){
        mensajes.push(errorPersonas);
        mostrarError(personas,errorPersonas);
    } 

    // Agregar otras validaciones aquí

    if (mensajes.length > 0) {
        e.preventDefault();
    } else {
    form.submit();
    }
});


function mostrarError(elemento, mensaje) {
    const errorElement = elemento.parentNode.querySelector(".mensaje-error"); // Busca un elemento de error existente dentro del contenedor error
    if (errorElement) {
        errorElement.innerText = mensaje; // Si se encuentra, actualiza el contenido de texto del elemento de error con el mensaje proporcionado
    } else {
        const newErrorElement = document.createElement("div"); // Si no se encuentra, crea un nuevo elemento de error (div)
        newErrorElement.classList.add("mensaje-error"); // Agrega la clase CSS "mensaje-error" al nuevo elemento
        newErrorElement.innerText = mensaje; // Establece el contenido de texto del elemento de error con el mensaje proporcionado
        elemento.parentNode.appendChild(newErrorElement); // Agrega el elemento de error como hijo del contenedor del elemento de entrada
    }
}


function ocultarError(elemento) {
    const errorElement = elemento.parentNode.querySelector(".mensaje-error");
    if (errorElement) {
        errorElement.remove();
    }
}