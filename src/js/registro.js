import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.min.js'
import '../css/style.css';

console.log("desde registro")

window.revisar = function (input) {
    console.log("ejecutando")

    if (input.value == "") {
        input.className = "form-control is-invalid";
        return false;
    } else {
        input.className = "form-control is-valid";
        return true;
    }
};


window.validarEmail = function(elemento) {
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (elemento.value != " " && expresion.test(elemento.value)) {
        elemento.className = "form-control is-valid"; return true;
    } else {
        elemento.className = "form-control is-invalid"; return false;
    }
}

window.validarNumeros = function (input) {
    if (input.value.length >= 8 && !isNaN(input.value)) {
        input.className = "form-control is-valid"; return true;
    } else {
        input.className = "form-control is-invalid"; return false;
    }
}


let checkTerminos = document.getElementById("terminos");

window.validarCheck = function () {
    if (checkTerminos.checked) {
        checkTerminos.className = "form-check-input is-valid"; return true;
    } else {
        checkTerminos.className = "form-check-input is-invalid"; return false;
    }
}

checkTerminos.addEventListener("change", validarCheck);


window.validarForm = function (event) {
    event.preventDefault();
    console.log("Desde Validar Form");

    if (revisar(document.getElementById("nombre")) &&
        validarEmail(document.getElementById("email")) &&
        validarNumeros(document.getElementById("contraseña")) &&
        validarCheck()) {
        enviarMail();    
    }
}

function enviarMail() {
    let template_params = {
        "from_name": document.getElementById("nombre").value,
        "message_html": `Email: ${document.getElementById(`email`).value} - Contraseña: ${document.getElementById(`contraseña`).value}`
    };

    let service_id = "default_service";
    let template_id = "rolling";
    emailjs.send(service_id, template_id, template_params).then(
        function(response){
            console.log("Respuesta cuando se envio correctament" + response);

            document.getElementById("alerta").className="alert alert-primary m-2 text-center";
            document.getElementById("alerta").innerText= "Su solicitud de registro fue enviada";
        },function(error){
            console.log("se produjo un error" + error);
            document.getElementById("alerta").className="alert alert-danger m-2 text-center";
            document.getElementById("alerta").innerText= " OCURRIO UN ERROR EN EL ENVIO";
        }
    )

}