
function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/img, "enter");
    var txtCifrado = txtCifrado.replace(/i/img, "imes");
    var txtCifrado = txtCifrado.replace(/a/img, "ei");
    var txtCifrado = txtCifrado.replace(/o/img, "ober");
    var txtCifrado = txtCifrado.replace(/u/img, "ufat");
    

    document.getElementById("imgDireita").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/img, "e");
    var txtCifrado = txtCifrado.replace(/imes/img, "i");
    var txtCifrado = txtCifrado.replace(/ei/img, "a");
    var txtCifrado = txtCifrado.replace(/ober/img, "o");
    var txtCifrado = txtCifrado.replace(/ufat/img, "u");
    

    document.getElementById("imgDireita").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style = "show";
    document.getElementById("copiar").style.display = "inherit";

}
function copiar(){
    var copiando = document.getElementById("texto2");
    copiando.select();
    document.execCommand('copy');
    alert("Texto COPIADO!!!!!");
}