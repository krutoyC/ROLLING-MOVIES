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
    if (validarNumero(document.getElementById('codigo')) &&
        validarTexto(document.getElementById('nombre')) &&
        validarTexto(document.getElementById('categoria')) &&
        validarDescripcion(document.getElementById('descripcion'))) {
        alert("Su formulario esta correcto");
    } else {
        alert("Hay un error en su formulario ");
    }
    let peliculaNueva = new Pelicula(codigo, nombre, tipo, categoria, descripcion, publicado, imagen, trailer);
    console.log(peliculaNueva);
    //agregar objeto al arreglo
    listaPeliculas.push(peliculaNueva);
    //guardar en localStorage
    localStorage.setItem('peliculaKey', JSON.stringify(listaPeliculas));

};

window.validarTexto = function (input) {
    console.log("ejecutando desde la funcion validar texto");
    if (input.value == "") {
        input.className = "form-control is-invalid";
        return false;
    } else {
        input.className = "form-control is-valid";
        return true;
    }
}
window.validarNumero = function (input) {
    let expresion = /^[0-9]{1,4}$/;
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}
window.validarDescripcion = function (texto) {
    if (texto.value != "" && texto.value.length >= 10) {
        texto.className = "form-control is-valid";
        return true;
    } else {
        texto.className = "form-control is-invalid";
        return false;
    }
}