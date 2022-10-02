const e = "enter"
const i = "imes"
const a = "ai"
const o = "ober"
const u = "ufat"


function desencriptar() {
    
    let texto = document.getElementById("texto1").value

    texto = texto.toLowerCase();

    texto = texto.replace(/enter/g, "e")
    texto = texto.replace(/imes/g, "i")
    texto = texto.replace(/ai/g, "a")
    texto = texto.replace(/ober/g, "o")
    texto = texto.replace(/ufat/g, "u")
    
    msj_des.style.opacity = 1;

    msj_des.value = texto;
}


function encriptar() {  

    let texto = document.getElementById("texto1").value

    texto = texto.toLowerCase();

    texto = texto.replace(/e/g, e);
    texto = texto.replace(/i/g, i);
    texto = texto.replace(/a/g, a);
    texto = texto.replace(/o/g, o);
    texto = texto.replace(/u/g, u);

    msj_des.style.opacity = 1;

    msj_des.value = texto;
    
    
    
}

function copiar_texto(){
    msj_des.select();
    document.execCommand("copy");
}