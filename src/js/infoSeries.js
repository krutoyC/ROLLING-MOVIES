import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "../css/style.css";

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
    // dibujar filas de la tabla
    dibujarInfo(arregloLS);
  }
}

function dibujarInfo(arregloLS) {
  let infoSeries = document.getElementById("informacion");
  for (let i in arregloLS) {
    codHTML = `<article class="mt-5 d-none" id="${listaPeliculas[i].codigo}">
        <div class="card card-info mb-3">
          <div class="row no-gutters">
            <div class="col-lg-7">
              <img src="img/info/${listaPeliculas[i].imagenInfo}" class="card-img"
                alt="poster ${listaPeliculas[i].nombre}">
            </div>
            <div class="col-lg-5 card-info">
              <div class="card-body">
                <h5 class="display-4">${listaPeliculas[i].nombre}</h5>
                <p class="text-justify mt-4">DESCRIPCIÓN: ${listaPeliculas[i].descripcion}</p>
                <p class="card-text">ACTORES: ${listaPeliculas[i].actores}</p>
                <p class="card-text">CATEGORÍA: ${listaPeliculas[i].categoria}</p>
                <p class="card-text">DURACIÓN: ${listaPeliculas[i].duracion}</p>
                <div class="mt-5 text-center">
                  <a href="error.html" data-toggle="tooltip" data-placement="top" title="REPRODUCIR"><i
                      class="far fa-play-circle fa-5x"></i></a>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                      <p class="mt-5 mb-3 mx-auto text-light display-4"><em>TRAILER:</em></p>
                      <div class="justify-content-center">
                        <div class="mb-5 text-center" max-width="400px">${listaPeliculas[i].trailer}</div>
                        </div>
      </article>`;
    infoSeries.innerHTML += codHTML;
  }
}

window.mostrarInfo = function(){
    let serieBuscada = window.location.search.split("=")[1]
    console.log(serieBuscada)
    document.getElementById(serieBuscada).className = "row justify-content-center";
    document.getElementById("navInfo").className = "navbar navbar-expand-lg navbar-light fixed-top";
    document.getElementById("footerInfo").className = "bg-dark text-light text-center p-3";
}


