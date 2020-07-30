import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';
import Pelicula from './pelicula.js'

let listaPeliculas = [];

window.agregarPelicula = function (event) {
    event.preventDefault();
    console.log("desde funcion agregar pelicula");

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let tipo = document.getElementById('tipo').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let publicado = document.getElementById('publicado').value;
    let imagen = document.getElementById('imagen').value;
    let trailer = document.getElementById('trailer').value;

    //validar formulario
    //crear un objeto    
    let peliculaNueva = new Pelicula(codigo, nombre, tipo, categoria, descripcion, publicado, imagen, trailer);
    console.log(peliculaNueva);
    //agregar objeto al arreglo
    listaPeliculas.push(peliculaNueva);
    //guardar en localStorage
    localStorage.setItem('peliculaKey', JSON.stringify(listaPeliculas));

};

