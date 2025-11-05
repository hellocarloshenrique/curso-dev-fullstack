// Desestruturacao de objetos (Extrair por nome)
//Exemplo no modo antigo
const usuario1 = {
    nome: 'Neo',
    idade: 30,
    cidade: 'Chicago'
}

const nome1 = usuario1.nome
const idade1 = usuario1.idade

console.log(nome1);
console.log(idade1);


//Usando desestruturacao
const usuario2 = {
    nome: 'Trinity',
    idade: 28,
    cidade: 'New York'
}

const { nome, idade, cidade} = usuario2

console.log(nome);
console.log(idade);
console.log(cidade);



