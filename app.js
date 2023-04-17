function encriptar() {
    let texto = document.getElementById("texto").value;
    let resultado = "";

    if (texto === "") {
        document.getElementById("copiar").style = "display: none"
        document.getElementById("desencriptado").innerHTML = `
        <div class="error">
        <img src="muñeco.png">
        <strong>Ningún mensaje fue encontrado</strong>
        <br>
        <p>Ingresa el texto que deseas encriptar o desencriptar.</p>
        </div>
        `
    } else {
        document.getElementById("copiar").style = "display: block"
        for (let i = 0; i < texto.length; i++) {
            let codigo = texto.charCodeAt(i);
            resultado += String.fromCharCode(codigo + 1);
        }
        document.getElementById("desencriptado").innerHTML = resultado;
        document.getElementById("texto").value = ""
    }

}

function desencriptar() {
    let textoEncriptado = document.getElementById("desencriptado").innerHTML;
    let resultado = "";
    let texto = document.getElementById("texto").value;

    if (texto === "") {
        document.getElementById("copiar").style = "display: none"
        document.getElementById("desencriptado").innerHTML = `
        <div class="error">
        <img src="muñeco.png">
        <strong>Ningún mensaje fue encontrado</strong>
        <br>
        <p>Ingresa el texto que deseas encriptar o desencriptar.</p>
        </div>
        `
    }
    else {
        document.getElementById("copiar").style = "display: block"
        for (let i = 0; i < textoEncriptado.length; i++) {
            let codigo = textoEncriptado.charCodeAt(i);
            resultado += String.fromCharCode(codigo - 1);
        }
        document.getElementById("desencriptado").innerHTML = resultado;
    }
}

function copiar() {
    let textoEncriptado = document.getElementById("desencriptado");
    if (textoEncriptado.innerHTML.trim() !== "") {
        let rango = document.createRange();
        rango.selectNode(textoEncriptado);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(rango);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Se ha copiado al portatapeles")
    } else {
        alert("No hay nada para copiar");
    }
}
