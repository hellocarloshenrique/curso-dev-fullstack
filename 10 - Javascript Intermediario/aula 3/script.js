
// Seletor por ID
document.querySelector('#titulo').innerHTML = 'Trocando o título'

// Seletor por tag
document.querySelector('a').innerText = '<b>teste ancora</b>'

// Selecionando mais de 1 item
let ancoras = document.querySelectorAll('a')

ancoras.forEach (function (elemento) { //função anônima / callback
    //console.log(elemento)
    elemento.innerHTML = 'testando'
})

// Selecionando mais de 1 item por classe
let boxes = document.querySelectorAll('.box')

/*
let count = 0
boxes.forEach( function(box) {
    count++

    box.innerHTML = 'box ' + count
})
*/

let count = 0
boxes.forEach( function(box, index) {
    box.innerHTML = 'box ' + (index + 1)
})