// receber o seletor do formulario
const cadForm = document.getElementById('cad_usuario_form')

// salvar os dados do formulario no localstorage
cadForm.addEventListener('submit', async (e) => {

    // Nao recarregar a pagina
    e.preventDefault();

    //Receber os dados do formulario
    const nome_usuario = document.getElementById('nome_usuario').value
    const email_usuario = document.getElementById('email_usuario').value
    console.log(nome_usuario, email_usuario);
    
})