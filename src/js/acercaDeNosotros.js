import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';
console.log("eacerca de nosotros");

let buscar = document.querySelector(`#buscar`);
let botonBuscar = document.querySelector(`#botonBuscar`);
let resultado = document.querySelector(`#resultados`);

let productos = [
    {codigo: `2233`, nombre: `luffy`},
    {codigo: `1234`, nombre: `Naruto`},
    {codigo: 5677, nombre: `Alice`, tipo: `serie`, categoria: `accion`, actores: `alicia Manuela` },
    {codigo: 7890, nombre: `Anne with e`, tipo: `serie`, categoria: `accion`, actores: `Anita L` },
]

window.filtrar = function (){
    console.log(buscar.value);
    resultado.innerHTML = ``;
    let texto = buscar.value.toLowerCase();
   

    for(let producto of productos){
        let nombre = producto.nombre.toLocaleLowerCase();
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `<li class= "text-light"><a class="text-decoration-none" href="info.html"> Nombre: ${producto.nombre} - Tipo: ${producto.tipo} - Categoria: ${producto.categoria}</a></li>`
        }
    }
    

    if(resultado.innerHTML === ``){
        resultado.innerHTML += `<li class= "font-weight-bold text-light"> Película o Serie no encontrada </li>`
    }
}

botonBuscar.addEventListener(`click`,filtrar);
//buscar.addEventListener(`keyup`,filtrar)