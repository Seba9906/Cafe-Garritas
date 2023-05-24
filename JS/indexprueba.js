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
