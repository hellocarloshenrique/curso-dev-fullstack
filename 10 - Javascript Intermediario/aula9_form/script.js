

let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento) {
    evento.preventDefault()

    let = temErro = false
    
    //nome do usuario
    let inputName = document.forms['formCadastro']['nome']

    if(!inputName.value) {
        temErro = true
        inputName.classList.add('inputError')

        let span = inputName.nextSibling.nextSibling
        span.innerHTML = 'Digite o nome corretamente'
    } else {
        inputName.classList.remove('inputError')

        let span = inputName.nextSibling.nextSibling
        span.innerHTML = ''
    }
    
    //email do usuario
    let inputEmail = document.forms['formCadastro']['email']

    if(!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerHTML = 'Digite o e-mail corretamente'
    } else {
        inputEmail.classList.remove('inputError')

        let span = inputEmail.nextSibling.nextSibling
        span.innerHTML = ''
    }    

    //escolher a cidade do usuario
    let selectCidade = document.forms['formCadastro']['cidade']

    if(!selectCidade.value) {
        temErro = true
        selectCidade.classList.add('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerHTML = 'selecione uma cidade'
    } else {
        selectCidade.classList.remove('inputError')

        let span = selectCidade.nextSibling.nextSibling
        span.innerHTML = ''
    }  

    if (!temErro) {
        formulario.submit()
    }
}