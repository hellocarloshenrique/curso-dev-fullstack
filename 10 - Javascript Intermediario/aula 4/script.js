
let menuMobile = document.querySelector('.menuMobile');
let botaoMenu = document.querySelector('.botaoMenu');

let aberto = false;

function abrirOuFecharMenu() {
    
    if (aberto === true) {
        aberto = false
        menuMobile.classList.remove('aberto')
        botaoMenu.innerText = 'Abrir menu'
    } else if (aberto === false) {
        aberto = true
        menuMobile.classList.add('aberto')
        botaoMenu.innerText = 'Fechar menu'
    }
};