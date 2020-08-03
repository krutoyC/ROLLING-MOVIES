import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';


let listaPeliculas = [];
let codHTML = "";
leerInfo();

function leerInfo() {
    // pregunto si el localstorage tiene datos
    if (localStorage.length > 0) {
        let arregloLS = JSON.parse(localStorage.getItem("peliculaKey"));
        if (listaPeliculas.length == 0) {
            listaPeliculas = arregloLS;
        }
        // borramos filas de la lista

        // dibujar filas de la tabla
        dibujarInfo(arregloLS);
    }
}

function dibujarInfo(arregloLS) {
    let infoSeries = document.getElementById("informacion");
    for (let i in arregloLS) {
        codHTML = `<article class="container-fluid d-flex justify-content-center" id="${listaPeliculas[i].codigo}>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand align-middle" href="index.html" onclick="">
                    <i class="far fa-arrow-alt-circle-left fa-2x text-primary"></i>
                    <p class="text-uppercase font-weight-bold text-light ml-3 mt-1">VOLVER AL CATALOGO</p>
                </a>
            </nav>
            <div class="mt-5">
                <div class="card my-5" style="max-width: 1000px;">
                    <div class="row no-gutters">
                        <div class="col-sm-12 col-md-6">
                            <img src="img/${listaPeliculas[i].imagen}" class="card-img" alt="poster ${listaPeliculas[i].nombre}">
                        </div>
                        <div
                            class="col-sm-12 col-md-6 bg-dark text-light d-flex justify-content-center align-items-center">
                            <div class="card-body bg-dark">
                                <div class="titulo-informacion-series">
                                    <span
                                        class="d-block p-2 mb-3 bg-primary text-white text-center titulo-informacion-series">Conoce
                                        más de tus programas favoritos</span>
                                </div>
                                <h5 class="card-title font-weight-bold text-light text-center mt-2">${listaPeliculas[i].nombre}</h5>
                                <br>
                                <p class="card-text text-justify"><strong>DESCRIPCIÓN: </strong>${listaPeliculas[i].descripcion}</p>
                                <p><strong>ACTORES: </strong>${listaPeliculas[i].actores}
                                </p>
                                <p><strong>CATEGORÍA: </strong>${listaPeliculas[i].categoria}</p>
                                <p><strong>DURACIÓN: </strong>${listaPeliculas[i].duracion}</p>
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <a href="error.html">
                                        <i class="far fa-play-circle fa-5x"></i>
                                    </a>
                                </div>
                                <p class="mt-3"><strong>TRAILER: </strong></p>
                                ${listaPeliculas[i].trailer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>`
        infoSeries.innerHTML += codHTML;
    }
}





