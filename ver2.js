function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let botonCopiar = document.getElementById("btn-copiar");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length !== 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "./imagenesd/idea.png";
        botonCopiar.style.display = "block"; // Mostrar el botón Copiar
    } else {
        muneco.src = "./imagenesd/idea.png";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let botonCopiar = document.getElementById("btn-copiar");

    let textoDesencriptado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length !== 0) {
        document.getElementById("texto").value = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muneco.src = "./imagenesd/idea.png";
        botonCopiar.style.display = "none"; // Ocultar el botón Copiar
    } else {
        muneco.src = "./imagenesd/idea.png";
        alert("Debes ingresar algún texto");
    }
}

function copiarResultado() {
    let resultado = document.getElementById("texto");
    resultado.select();
    navigator.clipboard.writeText(resultado.value)
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })
        .catch((error) => {
            console.error("Error al copiar el texto: ", error);
        });
}