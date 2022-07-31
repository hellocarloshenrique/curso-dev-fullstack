let gibis = [
    {
        produtora: "Marvel",
        desenhista: "Stan Lee",
        Revista: ['Homem-aranha', 'Hulk', 'Wolverine']
    },
    {
        produtora: "DC Comics",
        desenhista: "unnamed",
        Revista: ['Shazan', 'Black Adam', 'Batman'] 
    }
]

let htmlNerd = ''

for (let hqs of gibis) {

    let listaRevistas = ''

    for (let revistinha of hqs.Revista) {
        listaRevistas += `<li> ${revistinha} </li>`
    }

    htmlNerd += `
        <li>
            <b>Produtora:</b> ${hqs.produtora} <br>
            <b>Desenhista:</b> ${hqs.desenhista} <br>
            <b>Revista:</br></br>
            <ul>
                ${listaRevistas}
            </ul>
        </li>
    `
}

document.querySelector('#listaNerd').innerHTML = htmlNerd;