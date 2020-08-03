import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';
import Pelicula from './pelicula.js'
import $ from 'jquery';

let listaPeliculas = [];
let codHTML = "";
leerPeliculas();

window.agregarPelicula = function (event) {
    event.preventDefault();
    console.log("desde funcion agregar pelicula");

    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let tipo = document.getElementById('tipo').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let actores = document.getElementById('actores').value;
    let duracion = document.getElementById('duracion').value;
    let imagen = document.getElementById('imagen').value;
    let trailer = document.getElementById('trailer').value;
    let publicar;
    let check = document.getElementById("publicar");
    if (check.checked) {
        publicar = true;
    } else {
        publicar = false;
    }
    console.log(publicar);

    // validar formulario
    if (validarNumero(document.getElementById('codigo')) &&
        validarTexto(document.getElementById('nombre')) &&
        validarTexto(document.getElementById('categoria')) &&
        validarTexto(document.getElementById('tipo')) &&
        validarDescripcion(document.getElementById('descripcion')) &&
        validarTexto(document.getElementById('actores')) &&
        validarTexto(document.getElementById('duracion'))) {
        let peliculaNueva = new Pelicula(codigo, nombre, tipo, categoria, descripcion, actores, duracion, imagen, trailer, publicar);
        console.log(peliculaNueva);
        //agregar objeto al arreglo
        listaPeliculas.push(peliculaNueva);
        //guardar en localStorage
        localStorage.setItem('peliculaKey', JSON.stringify(listaPeliculas));
        // mostrar arreglo
        leerPeliculas();
        // borrar formulario
        limpiarFormulario();
        // cerrar ventana modal
        let ventanaModal = document.getElementById("agregarPelis");
        $(ventanaModal).modal("hide");
    } else {
        alert("Hay un error en su formulario ");
    }
};

// validación de los inputs
window.validarTexto = function (input) {
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

window.validarOpcion = function(opcion){
    if(opcion.value != ""){
        opcion.className = "form-control is-valid";
        return true
    }else{
        opcion.className = "form-control is-invalid";
        return false
    }
}

// tomar valor del checkbox "publicar"
let check = document.getElementById("publicar")
window.validarCheck = function () {
    if (check.checked) {
        return true;
    } else {
        return false;
    }
}

function leerPeliculas() {
    // pregunto si el localstorage tiene datos
    if (localStorage.length > 0) {
        let arregloLS = JSON.parse(localStorage.getItem("peliculaKey"));
        if (listaPeliculas.length == 0) {
            listaPeliculas = arregloLS;
        }
        // borramos filas de la lista
        borrarFilas();
        // dibujar filas de la tabla
        dibujarFilas(arregloLS);
        // dibujar en index
        dibujarIndex(arregloLS);
    }
}

function dibujarFilas(arregloLS) {
    let tabla = document.getElementById("tablaPelis");
    for (let i in arregloLS) {
        codHTML = `<tr>
        <th scope="row">${arregloLS[i].codigo}</th>
        <td>${arregloLS[i].nombre}</td>
        <td>${arregloLS[i].tipo}</td>
        <td>${arregloLS[i].categoria}</td>
        <td>${arregloLS[i].descripcion}</td>
        <td>${arregloLS[i].actores}</td>
        <td>${arregloLS[i].duracion}</td>
        <td class="d-flex"><button class="btn btn-outline-danger mr-1" onclick="eliminarProducto(${arregloLS[i].codigo})" data-toggle="tooltip" data-placement="top" title="Eliminar"><i class="fas fa-trash"></i></button><button
                class="btn btn-outline-primary" onclick="prepararProducto(${arregloLS[i].codigo})" data-toggle="tooltip" data-placement="top" title="Modificar"><i class="fas fa-edit"></i></button></td>
        </tr>`;
        tabla.innerHTML += codHTML;
    }
}

function dibujarIndex(arregloLS) {
    
    // // for (let i in arregloLS) {
    // //     if(arregloLS[i].tipo == "Película"){
    // //         codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
    // //         <div class="card">
    // //             <img src="img/${arregloLS[i].imagen}" class="card-img-top" alt="${arregloLS[i].nombre}">
    // //             <h5 class="card-title text-center mt-2">${arregloLS[i].nombre}</h5>
    // //         </div>
    // //     </div>`
    // //     // peliculas.innerHTML += codHTML;
    // //     }

}

function borrarFilas() {
    let tabla = document.getElementById("tablaPelis");
    if (tabla.children.length != 0) {
        while (tabla.firstChild) {
            tabla.removeChild(tabla.firstChild);
        }
    }
}

window.limpiarFormulario = function () { // limpia todos los input del formulario
    let formulario = document.getElementById("formularioPeliculas");
    formulario.reset();
    document.getElementById('codigo').className = "form-control";
    document.getElementById('nombre').className = "form-control";
    document.getElementById('tipo').className = "form-control";
    document.getElementById('categoria').className = "form-control";
    document.getElementById('descripcion').className = "form-control";
    document.getElementById('actores').className = "form-control";
    document.getElementById('duracion').className = "form-control";
    // productoExistente = false;
}