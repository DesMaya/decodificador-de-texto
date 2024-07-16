/**
 * Cifra de referência
 * 
 * "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
 */

    // const hasUpper = (str) => /[A-Z]/.test(str);
const limpaTextarea = () => {
    let textarea = document.getElementById("conteudo-texto");
    textarea.value = "";
}

function verificaMensagem(){
    let textarea = document.getElementById("conteudo-texto");
    let mensagem = textarea.value;

    if (!/[a-z]/.test(mensagem)){
        alert("Apenas letras minúsculas e sem acento.");
        return limpaTextarea();
    }
    else return mensagem;

}

function criptografar() {

}

function descriptografar() {

}
