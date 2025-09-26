let botaoTeste = document.querySelector('#botaoTeste')

let contador = 0

function cliqueBotao() {
    contador++

    console.log('Mensagem que aparece quando clico');

    if (contador >= 5) {
        botaoTeste.removeEventListener('click', cliqueBotao)
    }
}





botaoTeste.addEventListener('click', cliqueBotao)