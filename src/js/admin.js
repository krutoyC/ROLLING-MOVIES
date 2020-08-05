import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';
import Pelicula from './pelicula.js'
import $ from 'jquery';

let listaPeliculas = [];
let codHTML = "";
let usuarioAdmin;
leerPeliculas();
let peliculaExistente = false;
let objetoDestacado = "";

window.agregarPelicula = function (event) {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let tipo = document.getElementById('tipo').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let actores = document.getElementById('actores').value;
    let duracion = document.getElementById('duracion').value;
    let imagen = document.getElementById('imagen').value;
    let imagenInfo = document.getElementById("imagenInfo").value;
    let imagenDestacado = document.getElementById("imagenDestacado").value
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
        let peliculaNueva = new Pelicula(codigo, nombre, tipo, categoria, descripcion, actores, duracion, imagen, imagenInfo, imagenDestacado, trailer, publicar);
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
    if (localStorage.length > 1) {
        let arregloLS = JSON.parse(localStorage.getItem("peliculaKey"));
        if (listaPeliculas.length == 0) {
            listaPeliculas = arregloLS;
        }
        // borramos filas de la lista
        borrarFilas();
        // dibujar filas de la tabla
        dibujarFilas(arregloLS);
    }
}

function dibujarFilas(arregloLS) {
    let tabla = document.getElementById("tablaPelis");
    for (let i in arregloLS) {
        if(arregloLS[i].destacado == false){
        codHTML = `<tr>
        <th scope="row">${arregloLS[i].codigo}</th>
        <td>${arregloLS[i].nombre}</td>
        <td>${arregloLS[i].tipo}</td>
        <td>${arregloLS[i].categoria}</td>
        <td>${arregloLS[i].descripcion}</td>
        <td>${arregloLS[i].actores}</td>
        <td>${arregloLS[i].duracion}</td>
        <td class="d-flex"><button class="btn btn-outline-dark mr-1" onclick="eliminarPelicula(${arregloLS[i].codigo})" data-toggle="tooltip" data-placement="top" title="Eliminar"><i class="fas fa-trash"></i></button><button
                class="btn btn-outline-primary" onclick="prepararPelicula(${arregloLS[i].codigo})" data-toggle="tooltip" data-placement="top" title="Modificar"><i class="fas fa-edit"></i></button>
                <button class="btn btn-outline-warning ml-1" data-toggle="tooltip" data-placement="top" title="Destacar" onclick="destacadoProducto(${arregloLS[i].codigo})" id="btnDestacado${arregloLS[i].codigo}"><i class="fas fa-star"></i></button></td>
        </tr>`;
        tabla.innerHTML += codHTML;
    } else{
        codHTML = `<tr>
        <th scope="row">${arregloLS[i].codigo}</th>
        <td>${arregloLS[i].nombre}</td>
        <td>${arregloLS[i].tipo}</td>
        <td>${arregloLS[i].categoria}</td>
        <td>${arregloLS[i].descripcion}</td>
        <td>${arregloLS[i].actores}</td>
        <td>${arregloLS[i].duracion}</td>
        <td class="d-flex"><button class="btn btn-outline-dark mr-1" onclick="eliminarPelicula(${arregloLS[i].codigo})" data-toggle="tooltip" data-placement="top" title="Eliminar"><i class="fas fa-trash"></i></button><button
                class="btn btn-outline-primary" onclick="prepararPelicula(${arregloLS[i].codigo})" data-toggle="tooltip" data-placement="top" title="Modificar"><i class="fas fa-edit"></i></button>
                <button class="btn btn-warning ml-1" data-toggle="tooltip" data-placement="top" title="Destacar" onclick="destacadoProducto(${arregloLS[i].codigo})" id="btnDestacado${arregloLS[i].codigo}"><i class="fas fa-star"></i></button></td>
        </tr>`;
        tabla.innerHTML += codHTML;
    }
}}


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
    document.getElementById('imagen').className = "form-control";
    document.getElementById('imagenInfo').className = "form-control";
    document.getElementById('imagenDestacado').className = "form-control";
    document.getElementById('trailer').className = "form-control";
    peliculaExistente = false;
}

window.eliminarPelicula = function(codigo){
    console.log(codigo);
    let arregloFiltrado = listaPeliculas.filter(function(pelicula){
		return pelicula.codigo != codigo;
    });
    	//actualizar el localstorage
	console.log(arregloFiltrado);
	localStorage.setItem("peliculaKey",JSON.stringify(arregloFiltrado));
	listaPeliculas = arregloFiltrado;
	//volver a dibujar la tabla
	leerPeliculas();
}

window.prepararPelicula = function(codigo){
	console.log("hola");
	
	let objetoEncontrado = listaPeliculas.find(function(pelicula){
        return pelicula.codigo == codigo;
	})

	console.log(objetoEncontrado);

	//en el formulario, en cada input mostrar la propiedad del objeto encontrado
	document.getElementById('codigo').value = objetoEncontrado.codigo;
	document.getElementById('nombre').value = objetoEncontrado.nombre;
	document.getElementById('tipo').value = objetoEncontrado.tipo;
	document.getElementById('categoria').value = objetoEncontrado.categoria;
	document.getElementById('descripcion').value = objetoEncontrado.descripcion;
    document.getElementById('actores').value = objetoEncontrado.actores;
    document.getElementById('duracion').value = objetoEncontrado.duracion;
    document.getElementById('imagen').value = objetoEncontrado.imagen;
    document.getElementById('imagenInfo').value = objetoEncontrado.imagenInfo;
    document.getElementById('imagenDestacado').value = objetoEncontrado.imagenDestacado;
    document.getElementById('trailer').value = objetoEncontrado.trailer;

	//mostrar ventana modal
    let ventanaModal = document.getElementById("agregarPelis");
    $(ventanaModal).modal("show");
    peliculaExistente = true;
}

window.decidir = function(event){
	event.preventDefault();
	if(peliculaExistente == false){
		agregarPelicula();
	}else{
		modificarPelicula();
	}
}

function modificarPelicula(){
    console.log("modificando producto")
    // tomar los nuevos valores de los input
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let tipo = document.getElementById('tipo').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let actores = document.getElementById('actores').value;
    let duracion = document.getElementById('duracion').value;
    let imagen = document.getElementById('imagen').value;
    let imagenInfo = document.getElementById('imagenInfo').value;
    let imagenDestacado = document.getElementById('imagenDestacado').value;
    let trailer = document.getElementById('trailer').value;
    
    // buscar el producto que estoy modificando en el arreglo y le cambio los valores
    for(let i in listaPeliculas){
        if(listaPeliculas[i].codigo == codigo){
            // encontré el código > reemplazo valores
            listaPeliculas[i].nombre = nombre;
            listaPeliculas[i].tipo = tipo;
            listaPeliculas[i].categoria = categoria;
            listaPeliculas[i].descripcion = descripcion;
            listaPeliculas[i].actores = actores;
            listaPeliculas[i].duracion = duracion;
            listaPeliculas[i].imagen = imagen;
            listaPeliculas[i].imagenInfo = imagenInfo;
            listaPeliculas[i].imagenDestacado = imagenDestacado;
            listaPeliculas[i].trailer = trailer;
        }
    }
    // actualizar el LS
    localStorage.setItem("peliculaKey", JSON.stringify(listaPeliculas));
    // volver a dibujar la tabla
    leerPeliculas();
    limpiarFormulario();
    // cerrar ventana modal
    let ventanaModal = document.getElementById("agregarPelis");
    $(ventanaModal).modal("hide");
}

window.cerrarSesion = function(){
    usuarioAdmin = JSON.parse(localStorage.getItem("usuarioKey"));
    usuarioAdmin.adminStatus = false;
    localStorage.setItem('usuarioKey', JSON.stringify(usuarioAdmin));
}



window.destacadoProducto = function(codigo){
    objetoDestacado = listaPeliculas.find(function(pelicula){
        return pelicula.codigo == codigo;
	})
    console.log(objetoDestacado);
    for(let i in listaPeliculas){
        if(listaPeliculas[i].codigo == objetoDestacado.codigo){
            if(objetoDestacado.destacado == false){
                listaPeliculas[i].destacado = true;
                document.getElementById(`btnDestacado${objetoDestacado.codigo}`).className = "btn btn-warning ml-1";
                let arregloFiltrado = listaPeliculas.filter(function(pelicula){
                    return pelicula.codigo != codigo;
                });
                for(let i in arregloFiltrado){
                    document.getElementById(`btnDestacado${arregloFiltrado[i].codigo}`).setAttribute("disabled", "")
                }
            } else{
                document.getElementById(`btnDestacado${objetoDestacado.codigo}`).className = "btn btn-outline-warning ml-1"
                listaPeliculas[i].destacado = false;
                let arregloFiltrado = listaPeliculas.filter(function(pelicula){
                    return pelicula.codigo != codigo;
                });
                for(let i in arregloFiltrado){
                    document.getElementById(`btnDestacado${arregloFiltrado[i].codigo}`).removeAttribute("disabled", "")
                }
            }
        }
    }
    // actualizar el LS
    localStorage.setItem("peliculaKey", JSON.stringify(listaPeliculas));


    let arregloFiltrado = listaPeliculas.filter(function(pelicula){
		return pelicula.codigo != codigo;
    });
}
