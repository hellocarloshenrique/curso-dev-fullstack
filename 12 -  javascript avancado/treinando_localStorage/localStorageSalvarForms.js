// receber o seletor do formulario
const cadForm = document.getElementById('cad_usuario_form')



// salvar os dados do formulario no localstorage
cadForm.addEventListener('submit', async (e) => {

    // Nao recarregar a pagina
    e.preventDefault();

    //Receber os dados do foczrmulario
    const nome_usuario = document.getElementById('nome_usuario').value
    const email_usuario = document.getElementById('email_usuario').value
    console.log(nome_usuario);
    console.log(email_usuario);

    // salvar no local Storage
    localStorage.setItem('usuario', JSON.stringify({nome_usuario, email_usuario}))
    
    // Recuperar as informacoes do registro do localstorage
    const usuario_localStortage = localStorage.getItem('usuario')
    console.log(usuario_localStortage);
    
    // Converter a streing JSON em um objeto javaScript
    const dados_usuario = JSON.parse(usuario_localStortage)
    console.log(dados_usuario);

    document.getElementById('conteudo').innerHTML = 'Nome: ' + dados_usuario.nome_usuario + '<br>E-mail: ' + dados_usuario.email_usuario

    //Remover os registros do local Storage
    localStorage.removeItem('usuario')

    //aqui estou apenas testanto subir os arquivos para o rep remoto do gihub
    //teste-auth 1
    
})


