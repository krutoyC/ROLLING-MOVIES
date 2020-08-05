import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';
import $ from 'jquery';

let codHTML = "";
let codigoNav = "";
let usuarioAdmin;
dibujarNav();
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
    if (document.getElementById('usuario').value == usuarioAdmin.nombre && document.getElementById('pass').value == usuarioAdmin.password) {
        usuarioAdmin.adminStatus = true;
        localStorage.setItem('usuarioKey', JSON.stringify(usuarioAdmin));
        console.log(usuarioAdmin)
        dibujarNav();
        let ventanaModal = document.getElementById("modalLogin");
        $(ventanaModal).modal("hide");
    } else {
        alert("No es un usuario registrado")
    }
}

function dibujarNav() {
    usuarioAdmin = JSON.parse(localStorage.getItem("usuarioKey"));
    if (usuarioAdmin.adminStatus == false) {
        let navBar = document.getElementById("header");
        codigoNav = `<nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <a class="navbar-brand d-flex" href="index.html">
                <img src="img/logo-rolling-final.png" alt="logo rolling movies" width="180px">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <a type="button" class="btn btn-outline-primary text-uppercase m-1" href="index.html">INICIO</a>
                    <a type="button" class="btn btn-outline-primary text-uppercase m-1"  data-toggle="modal" data-target="#modalLogin"">LOG IN</a>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-uppercase btn btn-outline-primary m-1" href="#"
                            id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Qué buscás?
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item text-uppercase btn btn-outline-primary font-weight-bold"
                                href="#pelis">PELIS</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-uppercase btn btn-outline-primary font-weight-bold"
                                href="#series">SERIES</a>
                                <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-uppercase btn btn-outline-primary font-weight-bold"
                              href="index.html#accion">ACCION</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-uppercase btn btn-outline-primary font-weight-bold"
                            href="index.html#comedia">COMEDIA</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-uppercase btn btn-outline-primary font-weight-bold"
                            href="index.html#drama">DRAMA</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-uppercase btn btn-outline-primary font-weight-bold"
                            href="index.html#infantil">INFANTIL</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="BUSCAR" placeholder="BUSCAR" aria-label="BUSCAR">
                    <a class="btn btn-outline-primary my-2 my-sm-0" type="submit">BUSCAR</a>
                </form>
            </div>
        </nav>`
        navBar.innerHTML = codigoNav;
    } else {
        let navBar = document.getElementById("header");
        codigoNav = `<nav class="navbar navbar-expand-lg navbar-light fixed-top">
            <a class="navbar-brand d-flex" href="index.html">
                <img src="img/logo-rolling-final.png" alt="logo rolling movies" width="180px">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <a type="button" class="btn btn-outline-primary text-uppercase m-1" href="index.html">INICIO</a>
                    <a type="button" class="btn btn-outline-primary text-uppercase m-1" href="admin.html">ADMIN</a>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-uppercase btn btn-outline-primary m-1" href="#"
                            id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            Qué buscás?
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item text-uppercase btn btn-outline-primary font-weight-bold"
                                href="#pelis">PELIS</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item text-uppercase btn btn-outline-primary font-weight-bold"
                                href="#series">SERIES</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="BUSCAR" placeholder="BUSCAR" aria-label="BUSCAR">
                    <a class="btn btn-outline-primary my-2 my-sm-0" type="submit">BUSCAR</a>
                </form>
            </div>
        </nav>`
        navBar.innerHTML = codigoNav;
    }
}