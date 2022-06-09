
/* for (let contador = 0; contador <= 5; contador++) {
    document.write(`Hello World! ${contador}`)
    document.write('<br>')
} 
*/

let opcoes

for(let contador = 2022; contador >= 1900; contador--) {
    opcoes = opcoes + `<option>${contador}</option>`
    /* opcoes += `<option>${contador}</option>` 
    o shorthand para: "opcoes = opcoes +" é "opcoes +=". É a mesma coisa.
    */
}

document.querySelector('#ano').innerHTML = opcoes



let lista = ''

let clientes = ['Carlos', 'Henrique', 'Fulano', 'Rick', 'Morty']

for(let contador = 0; contador <= clientes.length - 1; contador++) {
    lista += `<li>${clientes[contador]}</li>`
}

document.querySelector('#listaClientes').innerHTML = lista