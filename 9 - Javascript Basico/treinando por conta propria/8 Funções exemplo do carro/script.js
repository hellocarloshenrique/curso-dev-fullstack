var statusCarro = "Desligado";
var aceleracao = 0;
var rotacaoDoVolante = 0;


function ligarDesligar() {
    if (statusCarro === "Desligado") {
        statusCarro = "Ligado";
    } else {
        statusCarro = "Desligado";
    }

    return statusCarro

}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return `Acelerando a ${aceleracao} ms.`;
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;

    return `Desacelerando para ${aceleracao} ms`
}

function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao

    return `${rotacaoDoVolante} º`

}