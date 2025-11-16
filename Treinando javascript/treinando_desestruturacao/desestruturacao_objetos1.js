//Desestruturacao de objetos
const pessoa = { name: 'Trinity', idade: 30, email: 'trinity@matrix.com.br'}
const { nome, idade, email} = pessoa

console.log(nome);
console.log(idade);
console.log(email);

// desestruturacao (renomeando variaveis)
const fornecedor = { razaoSocial: 'Alura', cnpj: '00.000.000/0000-00' }
const { razaoSocial: nomeFantasia, cnpj } = fornecedor

console.log(nomeFantasia);

const matrix =   { neo: 'Thomas Anderson' }
const { neo: oEscolhido } = matrix

console.log(oEscolhido);

// Valores padrao. Caso a propriedade nao  exista no objeto, voce pode definir um valor  padrao
const user = {  nome: 'Carlos', city: 'Sao Paulo' }
const { name, pais= 'Brasil' } = user

console.log(pais);

// Desestruturacao em PARAMETROS DE FUNCAO
function saudar({yourName, idade}) {
    console.log(`Ola, ${yourName}! Voce tem ${idade}  anos.`);
}

saudar({yourName: 'Carlinhos', idade: 30})