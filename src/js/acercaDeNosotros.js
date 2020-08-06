import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';
console.log("acerca de nosotros");

let buscar = document.querySelector(`#buscar`);
let botonBuscar = document.querySelector(`#botonBuscar`);
let resultado = document.querySelector(`#resultados`);

let peliculas = JSON.parse(localStorage.getItem(`peliculaKey`));

window.filtrar = function (){
    console.log(buscar.value);
    resultado.innerHTML = ``;
    let texto = buscar.value.toLowerCase();
   

    for(let pelicula of peliculas){
        let nombre = pelicula.nombre.toLocaleLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
            <div class="card cardGrow">
            <a class="text-decoration-none text-light" href="infoSeries.html?search=${pelicula.codigo}">
            <img src="img/${pelicula.imagen}" class="card-img-top" alt="${pelicula.nombre}">
            <h5 class="card-title text-center mt-2">${pelicula.nombre}</h5>
            </div></a></div>`  }
    }
    
    if(resultado.innerHTML === ``){
        resultado.innerHTML +=  `<li class= "font-weight-bold text-light"> Película o Serie no encontrada </li>`
    }
}

botonBuscar.addEventListener(`click`,filtrar);

buscar.addEventListener(`keypress`, function (event){
    if (event.keyCode === 13) { 
        event.preventDefault();
        console.log(event);
         filtrar()
       }

});
