/**
 * Cifra de referência
 * 
 * "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
 */
const cifra = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

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

function criptografar() {
    let textarea = document.getElementById("conteudo-texto");
    let mensagem = textarea.value;

    if (!verificaMensagem(mensagem)) return;
    
    const letrasNormais = Object.keys(cifra)
    const codificadas = Object.values(cifra)

    letrasNormais.forEach( (letra, i) => {
        mensagem = mensagem.replaceAll(letra, codificadas[i])
    })
    alert(mensagem)
}

function descriptografar() {
    let textarea = document.getElementById("conteudo-texto");
    let mensagem = textarea.value;

    if (!verificaMensagem(mensagem)) return;
    

    const letrasNormais = Object.keys(cifra)
    const codificadas = Object.values(cifra)

    codificadas.forEach( (letra, i) => {
        mensagem = mensagem.replaceAll(letra, letrasNormais[i])
    })
    alert(mensagem);

}



