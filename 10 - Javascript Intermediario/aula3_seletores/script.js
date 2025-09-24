// Seletor por ID
document.querySelector('#titulo').innerHTML = '<i>Exemplo</i>'

//setor por tag
document.querySelector('a').innerText = '<b>teste ancora</b>'

//exemplo
// let teste = ['a', 'b','c']

// teste.forEach(function(item){
//     console.log(item);
// })

//Selecionamndo mais de 1 item por TAG
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){
    console.log(elemento);
    elemento.innerHTML = 'teste'
})


//Selecionamndo mais de 1 item por Classe
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(divisao){ //funcao anonima (callback)
    divisao.innerHTML = 'testando...'
})

//Selecionamndo mais de 1 item por Classe
//add um contador
let boxes1 = document.querySelectorAll('.box')

let count = 0
boxes.forEach(function(divisao){
    count++
    divisao.innerHTML = 'testando ' + count
})