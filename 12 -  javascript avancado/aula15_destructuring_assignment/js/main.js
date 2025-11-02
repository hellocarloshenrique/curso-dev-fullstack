/* 

Destructuring  Assignment     

*/

// Exemplo abaixo
/* 
const  obj = {
    nome: 'Fulano',
    idade: 30,
}
const {
    nome, 
    idade,
}  = obj

console.log(nome);
console.log(idade); 

ou 

const  obj = {
    nome: 'Fulano',
    idade: 30,
}
const {
    nome: nomeDoUsuario,
    idade,
}  = obj

console.log(nomeDoUsuario);
console.log(idade); 

*/



function  transformarEmJson(response) {
    return response.json()
}

function exibirNaTela(dados) {
    console.log(dados);
}

function exibirErro(dados) {
    console.log('Aqui ta  errado, parceiro');
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick  = aoClicarNoBotao

async function aoClicarNoBotao() {
    const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(transformarEmJson)
        .catch(exibirErro)

    const { name, email,  phone} = dados
    console.log(name, email, phone);
    
}

    
