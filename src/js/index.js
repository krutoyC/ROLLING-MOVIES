import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';

let codHTML = "";

leerProductos()

function leerProductos() {
    if (localStorage.length > 0) {
        let listaPeliculas = JSON.parse(localStorage.getItem("peliculaKey"));
        console.log(listaPeliculas)
        for (let i in listaPeliculas) {
            if (listaPeliculas[i].publicar) {
                if(listaPeliculas[i].tipo == "Película"){
                    let catalogoPeliculas = document.getElementById("catalogoPeliculas");
                    console.log("catálogo " + catalogoPeliculas)
                    codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div>
                    </div>`;
                    catalogoPeliculas.innerHTML += codHTML;
                } else{
                    let catalogoSeries = document.getElementById("catalogoSeries");
                    console.log("catálogo " + catalogoSeries)
                    codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div>
                    </div>`;
                    catalogoSeries.innerHTML += codHTML;
                }
                switch (listaPeliculas[i].categoria) {
                    case "Acción":
                    let catalogoSeries = document.getElementById("catalogoAccion");
                    console.log("catálogo " + catalogoSeries)
                    codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div>
                    </div>`;
                    catalogoSeries.innerHTML += codHTML;
                        break;
                    case "Comedia":
                        catalogoSeries = document.getElementById("catalogoComedia");
                    console.log("catálogo " + catalogoSeries)
                    codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div>
                    </div>`;
                    catalogoSeries.innerHTML += codHTML;
                        break;
                        case "Drama":
                        catalogoSeries = document.getElementById("catalogoDrama");
                    console.log("catálogo " + catalogoSeries)
                    codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div>
                    </div>`;
                    catalogoSeries.innerHTML += codHTML;
                        break;
                        case "Infantil":
                        catalogoSeries = document.getElementById("catalogoInfantil");
                    console.log("catálogo " + catalogoSeries)
                    codHTML = `<div class="card-deck col-sm-12 col-md-6 col-lg-3 my-3">
                    <div class="card">
                    <img src="img/${listaPeliculas[i].imagen}" class="card-img-top" alt="${listaPeliculas[i].nombre}">
                    <h5 class="card-title text-center mt-2">${listaPeliculas[i].nombre}</h5>
                    </div>
                    </div>`;
                    catalogoSeries.innerHTML += codHTML;
                        break;
                }
            }
        }
    }

}

