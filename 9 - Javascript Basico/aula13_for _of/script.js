let clientes = [
     {
          nome: 'Carlos',
          idade: 33,
          linguagens: ['Javascript', 'Python', 'php']
     },
     {
           nome: 'Henrique',
          idade: 25,
          linguagens: ['Typescript', 'C', 'C++ ']         
     },
     {
           nome: 'Damasceno',
          idade: 84,
          linguagens: ['Go', 'Switf', 'Ruby']         
     }
]


// for (let contador =0; contador < clientes.length; contador++) {
//      console.log(clientes[contador].nome);
     
// }

let htmlClientes = ''

for (let cliente of clientes) {

     let listaLinguagens = ''
     
     for ( let linguagem of cliente.linguagens) {
          listaLinguagens = listaLinguagens + `<li>${linguagem}</li>`;
          
     }

     htmlClientes = htmlClientes + `
          <li>
               <b>Nome:</b> ${cliente.nome}<br>
               <b>Idade:</b> ${cliente.idade} <br>
               <b>linguagens</b> <br>
               <ul>
                    ${listaLinguagens}
               </ul>
          </li>
     `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes