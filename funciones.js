const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");
var tamanoTexto = 0;


var textarea = document.getElementById("campo-mensaje");
var answer = document.getElementById("copiaTexto");
var copy = document.getElementById("copiarTexto");


const matriz_code = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4
];

const matriz_decode = [
    ["enter", "e"], //indice 0
    ["imes", "i"], //indice 1
    ["ai", "a"], //indice 2
    ["ober", "o"], //indice 3
    ["ufat", "u"], //indice 4
];

function btnEncriptar() {

    const texto = encriptar(campo_texto.value);
    tamanoTexto = texto;
    campo_mensaje.value = texto;




}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if (fraseEncriptada.includes(matriz_code[i][0])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1],
            )
        }
    }

    return fraseEncriptada;
}


function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    tamanoTexto = texto;
    campo_mensaje.value = texto;
}

function desencriptar(fraseDesencriptada) {
    for (let i = 0; i < matriz_decode.length; i++) {
        if (fraseDesencriptada.includes(matriz_decode[i][0])) {
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_decode[i][0],
                matriz_decode[i][1],
            )
        }
    }
    return fraseDesencriptada;
}


function borrarImagen() {
    document.getElementById("campo-mensaje").style.visibility = "visible";
}

function mostrarImagen() {
    document.getElementById("campo-mensaje").style.visibility = "hidden";
}

function comprobarVacio() {
    if (tamanoTexto.length == 0) {
        console.log(tamanoTexto.length);
        alert("Debes introducir un texto");
        mostrarImagen();
        mostrarBotonCopiar();
    }
    else {
        borrarImagen();
        borrarBotonCopiar();
    }

}


function btnCopiar() {
    copy.addEventListener('click', copiarElTexto());
}

function copiarElTexto() {

    textarea.select();
    try {
        var successful = document.execCommand('copy');

        if (successful) answer.innerHTML = 'Copiado!';
        else answer.innerHTML = 'Incapaz de copiar!';
    } catch (err) {
        answer.innerHTML = 'Browser no soportado!';
    }

}


function borrarBotonCopiar() {
    document.getElementById("copiarTexto").style.visibility = "visible";
}

function mostrarBotonCopiar() {
    document.getElementById("copiarTexto").style.visibility = "hidden";
}

