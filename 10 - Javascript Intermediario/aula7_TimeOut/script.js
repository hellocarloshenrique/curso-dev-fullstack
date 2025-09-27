let toast = document.querySelector('.toast')
let botaoCadastrar = document.querySelector('#botaoCadastrar')
let textoDigitado = document.querySelector('#textoDigitado')


botaoCadastrar.onclick = function () {

    const nomeDaTarefa = textoDigitado.value 
    toast.innerHTML = `Tarefa ${nomeDaTarefa} cadastrada com sucesso`

    toast.classList.add('visible')

    setTimeout(function() {
        toast.classList.remove('visible')
    }, 5000)
}