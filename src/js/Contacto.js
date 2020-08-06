import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';
import $ from 'jquery';

console.log("hola");

window.revisar = function () {
    let elemento = document.getElementById("nombre");
    if (elemento.value == "") {
        elemento.className = "form-control is-invalid";
        return false;
    } else {
        elemento.className = "form-control is-valid";
        return true;
    }
}

window.revisartextarea = function () {
    let elemento = document.getElementById("textArea");
    if (elemento.value == "") {
        elemento.className = "form-control is-invalid";
        return false;
    } else {
        elemento.className = "form-control is-valid";
        return true;
    }
}

window.validarEmail = function () {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    let correo = document.getElementById("email");

    if (correo.value != "" && expresion.test(correo.value)) {
        correo.className = "form-control is-valid";
        return true;
    } else {
        correo.className = "form-control is-invalid";
        return false;
    }
}

let terminos = document.getElementById("aceptarTerminos");

function validartilde() {
    if (terminos.checked) {
        terminos.className = "form-check-input is-valid";
        return true;
    } else {
        terminos.className = "form-check-input is-invalid";
        return false;
    }

}
terminos.addEventListener("change", validartilde);

window.validartodo = function (event) {
    event.preventDefault();
    console.log("validar todo");
    //tratar de que todo este validado
    if (revisar(document.getElementById("nombre")) && revisartextarea(document.getElementById("textArea")) && validarEmail(document.getElementById("email")) && validartilde()) {
        enviarEmail();
        alert("Consulta lista para ser enviada");
    } else {
        alert("Hay un error en el formulario");
    }
}

function enviarEmail() {     
    let template_params = {
        from_name: document.getElementById("nombre").value,
        message_html: `Mensaje: ${document.getElementById("textArea").value} - Email: ${document.getElementById("email").value}`
    };
    
    let service_id = "default_service";
    let template_id = "template_P80i089q";
    emailjs.send(service_id, template_id, template_params).then(function(response){
        console.log("se envio correctamente"+response);
        document.getElementById("envio").className="alert alert-primary my-4";
document.getElementById("envio").innerText="Su consulta fué enviada de forma correcta";
limpiarConsulta();
    },function (error){
        console.log("fallo en el envio"+error);
        ocument.getElementById("envio").className="alert alert-danger my-4";
document.getElementById("envio").innerText="Falló en el envio";
    }) 
}


function limpiarConsulta() {
    let formulario = document.getElementById("formularioConsulta");
    formulario.reset();   
}

