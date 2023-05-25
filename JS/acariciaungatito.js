//URL del API
const apiUrl = 'https://api.thecatapi.com/v1/images/search';

//fetch(apiUrl)
//.then(response => response.json())
//.then(data => console.log(data))
//.catch(error => console.error(error))

//Obtener el boton y el contenedor
const btnCat = document.querySelector('#btn-cat');
const catImgContainer = document.querySelector('#cat-img-container')

//Escuchar cuando se da click
btnCat.addEventListener('click', () => {
    //Llamar al Api
    fetch(apiUrl)
        //Convertir la respuesta a Json
        .then(response => response.json())
        .then(data => {
            //Obtener la url de la imagen del gato
            const catImgUrl = data [0].url;

            //Agregar la imagen como backgorund al container
            catImgContainer.style.backgroundImage = `url('${catImgUrl}')`;
        })
        .catch(error => console.log(error));
})