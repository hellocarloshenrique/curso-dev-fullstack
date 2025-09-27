const botao = document.querySelector('#pilulaVermelha');
const statusDisplay = document.querySelector('#status');

botao.addEventListener('click', () => {
    botao.disabled = true;
    statusDisplay.innerHTML = '<strong>Morpheus:</strong> Lembre-se, tudo que lhe ofereco e a verdade, nada mais.';

    //inicio do primeiro timeout (5 segundos)
    setTimeout(() => {
        statusDisplay.innerHTML = '<strong>Sistema:</strong> Sentindo uma falta... A verdade esta chegando.'

    //inicio do segundo timeout (2 segundos)
    setTimeout(() => {
        statusDisplay.innerHTML = '<h2>Bem-vindo ao mundo real.</h2>'
        botao.disabled = false;
    }, 2000)
    }, 5000)
})