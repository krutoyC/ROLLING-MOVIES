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
        codHTML = `<article class="d-none" id="${listaPeliculas[i].codigo}">
                <div class="card my-5 mx-auto" style="max-width: none;">
                    <div class="row no-gutters">
                        <div class="col-sm-12 col-md-6 bg-dark">
                            <img src="img/${listaPeliculas[i].imagen}" class="card-img" alt="poster ${listaPeliculas[i].nombre}">
                        </div>
                        <div
                            class="col-sm-12 col-md-6 bg-dark text-light d-flex justify-content-center">
                            <div class="card-body bg-dark">
                                <div class="titulo-informacion-series">
                                    <span
                                        class="d-block p-2 mb-3 bg-primary text-white text-center titulo-informacion-series">Conoce
                                        más de tus programas favoritos</span>
                                </div>
                                <h2 class="card-title text-uppercase font-weight-bold text-light text-center mt-2"><em>${listaPeliculas[i].nombre}</em></h2>
                                <br>
                                <p class="card-text text-justify"><strong>DESCRIPCIÓN: </strong>${listaPeliculas[i].descripcion}</p>
                                <p><strong>ACTORES: </strong>${listaPeliculas[i].actores}
                                </p>
                                <p><strong>CATEGORÍA: </strong>${listaPeliculas[i].categoria}</p>
                                <p><strong>DURACIÓN: </strong>${listaPeliculas[i].duracion}</p>
                                <div class="d-flex justify-content-center align-items-center">
                                <a href="index.html" class="mx-5" data-toggle="tooltip" data-placement="top" title="VOLVER AL CATALOGO"><i class="far fa-arrow-alt-circle-left fa-5x"></i></a>
                                    <a href="error.html" class="mx-5" data-toggle="tooltip" data-placement="top" title="REPRODUCIR">
                                        <i class="far fa-play-circle fa-5x"></i>
                                    </a>
                                </div>
                                <p class="mt-3"><strong>TRAILER: </strong></p>
                                <div width="450" height="300">${listaPeliculas[i].trailer}</div>
                            </div>
                        </div>
                    </div>
                </div>
        </article>`
        infoSeries.innerHTML += codHTML;
    }
}

window.mostrarInfo = function(){
    let serieBuscada = window.location.search.split("=")[1]
    console.log(serieBuscada)
    document.getElementById(serieBuscada).className ="row justify-content-center"; 
}


