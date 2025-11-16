

salvarLocalStorage();

function salvarLocalStorage() {
    // aqui salva o item no localstorage
 localStorage.setItem('usuario', 'Carlos Henrique')
 localStorage.setItem('e-mail', 'carlos@gmail.com')
 
    // aqui recupera a informacao do registro do localstorage
    const usuarioLocalStorage = localStorage.getItem('usuario') 
    const emailLocalStorage = localStorage.getItem('email')
    console.log(usuarioLocalStorage);
    console.log(emailLocalStorage);
    
    // aqui vai enviar para o HTML os dados salvos no localstorage
    document.getElementById('conteudo').innerHTML = 'Nome: ' + usuarioLocalStorage + '<br> E-mail: ' + emailLocalStorage
}