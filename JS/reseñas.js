const apli = document.querySelector('.containerReseñas')
// Función para obtener datos aleatorios de usuario utilizando la API Randomuser
function obtenerUsuarioAleatorio() {
    return fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => data.results[0])
      .catch(error => console.log(error));
  }
  
  // Función para actualizar una reseña con los datos del usuario aleatorio
  function actualizarReseñaConUsuarioAleatorio(idContenedorReseña) {
    const contenedorReseña = document.getElementById(idContenedorReseña);
    const contenedorUsuario = contenedorReseña.querySelector('.usuario');
  
    obtenerUsuarioAleatorio()
      .then(usuario => {
        const nombreCompleto = `${usuario.name.first} ${usuario.name.last}`;
        const foto = usuario.picture.thumbnail;
  
        // Actualizar los elementos HTML dentro del contenedor de usuario
        contenedorUsuario.innerHTML = `
          <img src="${foto}" alt="Foto de perfil">
          <p>${nombreCompleto}</p>
        `;
      });
  }
  
  // Llamar a la función para cada contenedor de reseña
  actualizarReseñaConUsuarioAleatorio('reseña1');
  actualizarReseñaConUsuarioAleatorio('reseña2');
  actualizarReseñaConUsuarioAleatorio('reseña3');
  