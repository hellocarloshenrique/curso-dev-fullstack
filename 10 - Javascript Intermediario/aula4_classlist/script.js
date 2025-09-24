
let menuMobile = document.querySelector('.menuMobile')

let aberto = false

function abrirOuFecharMenu() {
    
    if (aberto === true) {
        aberto = false
        menuMobile.classList.remove('aberto')
    } else if (aberto === false) {
        aberto = true
        menuMobile.classList.add('aberto')
    }
    
}