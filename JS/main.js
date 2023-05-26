window.addEventListener("resize", function() { //seleccionamos la regla nav del html, obtenemos la altura del nav a traves de offsetHeight y lo almacenamos en la variable
    const alturaNav = document.querySelector("nav").offsetHeight; //usamos addEventListener mediante el evento resize para que se active cada vez que cambiamos de tamaño el navegador
    const h1 = document.querySelector("h1"); 
    h1.style.marginTop = alturaNav + "px"; /*establecemos la altura del margintop del h1 en funcion de alturaNav y al concatenarlo
                                            con la cadena px especificamos que el valor debe ser interpretado como un numero de pixeles, este nro de pixeles sera la cantidad de espacio
                                            el cual nuestro margin top se desplazara*/
  });
  window.onscroll = function (){miFuncion()};

  var gato2 = document.getElementById("gato2");
  var gato3 = document.getElementById("gato3");
  
  var distancia_gato2, distancia_gato3;
  
  function miFuncion(){
      distancia_gato2 = window.innerHeight - gato2.getBoundingClientRect ().top;
      if (distancia_gato2 >= 200){
          gato2.classList.add("efecto-gato2");
      }
      distancia_gato3 = window.innerHeight - gato3.getBoundingClientRect ().top;
      if (distancia_gato3 >= 200){
          gato3.classList.add("efecto-gato3");
      }
  }
