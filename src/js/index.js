import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "../css/style.css";
import $ from "jquery";
import { usuarioAdmin } from "./usuario.js";

let codHTML = "";
let codigoNav = "";
let codDestacado = "";
dibujarNav();
dibujarDestacado();
leerProductos();

function leerProductos() {
  if (localStorage.length > 0) {
    let listaPeliculas = JSON.parse(localStorage.getItem("peliculaKey"));
    for (let i in listaPeliculas) {
      if (listaPeliculas[i].publicar) {
        if (listaPeliculas[i].tipo == "Película") {
          let catalogoPeliculas = document.getElementById("catalogoPeliculas");
          codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card cardGrow">
                    <a class="text-decoration-none text-light" href="infoSeries.html?search=${listaPeliculas[i].codigo}">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div></a>
                    </div>`;
          catalogoPeliculas.innerHTML += codHTML;
        } else {
          let catalogoSeries = document.getElementById("catalogoSeries");
          codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card cardGrow">
                    <a class="text-decoration-none text-light" href="infoSeries.html?search=${listaPeliculas[i].codigo}">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div></a>
                    </div>`;
          catalogoSeries.innerHTML += codHTML;
        }
        switch (listaPeliculas[i].categoria) {
          case "Acción":
            let catalogoSeries = document.getElementById("catalogoAccion");
            codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card cardGrow">
                    <a class="text-decoration-none text-light" href="infoSeries.html?search=${listaPeliculas[i].codigo}">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div></a>
                    </div>`;
            catalogoSeries.innerHTML += codHTML;
            break;
          case "Comedia":
            catalogoSeries = document.getElementById("catalogoComedia");
            codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card card-deck cardGrow">
                    <a class="text-decoration-none text-light" href="infoSeries.html?search=${listaPeliculas[i].codigo}">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div></a>
                    </div>`;
            catalogoSeries.innerHTML += codHTML;
            break;
          case "Drama":
            catalogoSeries = document.getElementById("catalogoDrama");
            codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card cardGrow">
                    <a class="text-decoration-none text-light" href="infoSeries.html?search=${listaPeliculas[i].codigo}">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div></a>
                    </div>`;
            catalogoSeries.innerHTML += codHTML;
            break;
          case "Infantil":
            catalogoSeries = document.getElementById("catalogoInfantil");
            codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card cardGrow">
                    <a class="text-decoration-none text-light" href="infoSeries.html?search=${listaPeliculas[i].codigo}">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div></a>
                    </div>`;
            catalogoSeries.innerHTML += codHTML;
            break;
        }
      }
    }
  }
}

// logear admin
window.admin = function (e) {
  e.preventDefault();
  if (
    document.getElementById("usuario").value == "Admin" &&
    document.getElementById("pass").value == "1234admin"
  ) {
    usuarioAdmin.adminStatus = true;
    localStorage.setItem("usuarioKey", JSON.stringify(usuarioAdmin));
    alert("Bienvenido Admin");
    console.log(usuarioAdmin);
    dibujarNav();
    let ventanaModal = document.getElementById("modalLogin");
    $(ventanaModal).modal("hide");
  } else {
    alert("No es un usuario registrado");
  }
};

// localStorage.setItem('usuarioKey', JSON.stringify(usuarioAdmin));

function dibujarNav() {
  if (localStorage.length > 0) {
    let usuarioAdmin = JSON.parse(localStorage.getItem("usuarioKey"));
    if ((usuarioAdmin == null)) {
      usuarioAdmin = {
        nombre: "Admin",
        password: "1234admin",
        adminStatus: false,
      };
      localStorage.setItem("usuarioKey", JSON.stringify(usuarioAdmin));
    }else{
    if (usuarioAdmin.adminStatus == false) {
      let navBar = document.getElementById("botonesNav");
      codigoNav = `<a type="button" class="btn btn-outline-primary text-uppercase m-1" href="index.html">INICIO</a>
        <a type="button" class="btn btn-outline-primary text-uppercase m-1" data-toggle="modal"
            data-target="#modalLogin">LOG IN</a>`;
      navBar.innerHTML = codigoNav;
    } else {
      let navBar = document.getElementById("botonesNav");
      codigoNav = `<a type="button" class="btn btn-outline-primary text-uppercase m-1" href="index.html">INICIO</a>
      <a type="button" class="btn btn-outline-primary text-uppercase m-1" href="admin.html">ADMIN</a>`;
      navBar.innerHTML = codigoNav;
    }}
  } else {
    let navBar = document.getElementById("botonesNav");
    codigoNav = `<a type="button" class="btn btn-outline-primary text-uppercase m-1" href="index.html">INICIO</a>
    <a type="button" class="btn btn-outline-primary text-uppercase m-1"  data-toggle="modal" data-target="#modalLogin>LOG IN</a>`;
    navBar.innerHTML = codigoNav;
  }
}

function dibujarDestacado() {
  let arregloLS = JSON.parse(localStorage.getItem("peliculaKey"));
  for (let i in arregloLS) {
    if (arregloLS[i].destacado) {
      let sectionDestacado = document.getElementById("destacado");
      codDestacado = `<div class="card card-info text-white">
                <img src="img/destacado/${arregloLS[i].imagenDestacado}" class="card-img" alt="${arregloLS[i].nombre}">
                <div class="row justify-content-end">
                    <div class="texto-destacado d-none d-lg-block">
                        <h2 class="col-12 card-title text-light"><strong>${arregloLS[i].nombre}</strong></h2>
                        <p class="col-12 card-text text-light my-4"><strong>${arregloLS[i].descripcion}</strong></p>
                        <p class="col-12 card-text text-light"><strong>Reparto: ${arregloLS[i].actores}</strong></p>
                    </div>
                </div>
            </div>`;
        sectionDestacado.innerHTML += codDestacado;
}}}


//FUNCION BUSCAR 
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
            </div></a></div>`
            
            //`<li class= "text-light"><a class="text-decoration-none" href="info.html"> Nombre: ${pelicula.nombre} - Tipo: ${pelicula.tipo} - Categoria: ${pelicula.categoria}</a></li>`
        }
    }
    
    if(resultado.innerHTML === ``){
        resultado.innerHTML +=  `<li class= "font-weight-bold text-light"> Película o Serie no encontrada </li>`
    }
}

botonBuscar.addEventListener(`click`,filtrar);

//BUSCAR CON ENTER
buscar.addEventListener(`keypress`, function (event){
    if (event.keyCode === 13) { 
        event.preventDefault();
        console.log(event);
         filtrar()
       }

});