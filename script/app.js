/**
 * Cifra de referência
 * 
 * "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
 */
const letrasNormais = ["e", "i", "a", "o", "u"]
const codificadas = ["enter", "imes", "ai", "ober", "ufat"]

const limpaTextarea = () => {
    let textarea = document.getElementById("conteudo-texto");
    textarea.value = "";
}

function verificaMensagem(mensagem){
    if (!mensagem.length){
        alert("Digite uma mensagem");
        return false;
    }
    else if (!/[a-z]/.test(mensagem)){
        alert("Apenas letras minúsculas e sem acento.");
        limpaTextarea();
        return false;
    }
    else return true;

}

function criptografar(e) {
    let textarea = document.getElementById("conteudo-texto");
    let mensagem = textarea.value;

    if (!verificaMensagem(mensagem)) return;

    letrasNormais.forEach( (letra, i) => {
        mensagem = mensagem.replaceAll(letra, codificadas[i])
    })

    let campoMensagem = document.querySelector(".conteudo__direita__exibicao");
    campoMensagem.classList.remove("oculta");

    let exibicaoAlerta = document.querySelector(".conteudo__direita__alerta");
    exibicaoAlerta.classList.add("oculta");

    let exibicaoMensagem = document.querySelector(".conteudo__direita__exibicao__mensagem")
    exibicaoMensagem.textContent = mensagem

    limpaTextarea()

    e.preventDefault();
}

function descriptografar(e) {
    let textarea = document.getElementById("conteudo-texto");
    let mensagem = textarea.value;

    if (!verificaMensagem(mensagem)) return;

    codificadas.forEach( (letra, i) => {
        mensagem = mensagem.replaceAll(letra, letrasNormais[i])
    })
    
    let campoMensagem = document.querySelector(".conteudo__direita__exibicao");
    campoMensagem.classList.remove("oculta");

    let exibicaoAlerta = document.querySelector(".conteudo__direita__alerta");
    exibicaoAlerta.classList.add("oculta");

    let exibicaoMensagem = document.querySelector(".conteudo__direita__exibicao__mensagem")
    exibicaoMensagem.textContent = mensagem

    limpaTextarea()

    e.preventDefault();

}



