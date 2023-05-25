document.addEventListener('DOMContentLoaded', function() {
    //URL del API
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
  
    //Obtener el boton y el contenedor
    const btnCat = document.querySelector('#btn-cat');
    const catImgContainer = document.querySelector('#cat-img-container');
  
    //Llamar al Api al cargar la página
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        //Obtener la url de la imagen del gato
        const catImgUrl = data[0].url;
  
        //Agregar la imagen como background al container
        catImgContainer.style.backgroundImage = `url('${catImgUrl}')`;
      })
      .catch(error => console.error(error));
  
    //Escuchar cuando se da click
    btnCat.addEventListener('click', () => {
      //Llamar al Api al hacer click
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          //Obtener la url de la imagen del gato
          const catImgUrl = data[0].url;
  
          //Agregar la imagen como background al container
          catImgContainer.style.backgroundImage = `url('${catImgUrl}')`;
        })
        .catch(error => console.error(error));
    });
  });