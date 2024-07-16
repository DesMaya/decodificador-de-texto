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
    //console.log(codificadas)

    letrasNormais.forEach( (letra, i) => {
        //console.log(letra, codificadas[i])
        mensagem = mensagem.replaceAll(letra, codificadas[i])
    })
    //console.log(mensagem)
    return mensagem;
}

function descriptografar() {

}


