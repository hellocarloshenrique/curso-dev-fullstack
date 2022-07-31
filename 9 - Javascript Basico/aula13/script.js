let clientes = [
    {
        nome: "Carlos",
        idade: 31,
        linguagem: ['javascript', 'kotlin', 'swift']
    },
    {
        nome: "Elizabeth",
        idade: 28,
        linguagem: ['do amor', 'raiva', 'hahahaha']
    },
    {
        nome: "Elias",
        idade: 31,
        linguagem: ['javascript', 'kotlin', 'swift']
    }
]

/* for (let contador = 0; contador < clientes.length; contador++){
    console.log(clientes[contador].idade)
} */

let htmlClientes = ''

for (let cliente of clientes){

    let listaLinguagens = ''

    for (let linguagem of cliente.linguagem) {
        listaLinguagens += `<li>${linguagem} </li>`
    }

    htmlClientes += `
        <li>
            <b>Nome:</b> ${cliente.nome} <br>
            <b>Idade:</b> ${cliente.idade}<br>
            <b>Linguagem:</b><br>
            <ul>
                ${listaLinguagens}
            </ul>
        </li>
    `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes;