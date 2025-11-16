

salvarLocalStorage();

function salvarLocalStorage() {
    // aqui salva o objeto no localstorage
    localStorage.setItem('usuario', JSON.stringify({usuario: 'Carlos', email: 'carlosdamasceno@gmail.com'}))
 
    // aqui recupera a informacao do registro do localstorage
    const usuarioLocalStorage = localStorage.getItem('usuario') 
    console.log(usuarioLocalStorage);

    // aqui vou converter a string em objeto novamente
    const dadosUsuario = JSON.parse(usuarioLocalStorage)
    console.log(dadosUsuario);
    
    // aqui vai enviar para o HTML os dados salvos no localstorage
    document.getElementById('conteudo').innerHTML = 'Nome: ' + dadosUsuario.usuario + '<br> E-mail: ' + dadosUsuario.email + '<br>'
}