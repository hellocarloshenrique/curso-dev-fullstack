/*

string
number
boolean
array
undefined
null

*/

//string
let nome = 'Thiago'
console.log(nome);

//string - concatenada
let sobrenome = 'Medeiros';
console.log(nome + ' ' + sobrenome);

//string literal
console.log(`${nome} ${sobrenome}`);


//number
let idade = 30;
console.log(idade);

console.log(idade + 10);

//number float
let porcentagem = 10.2;
console.log(porcentagem +'%');

//boolean (true or false)
let maiorDeIdade = true;
console.log(maiorDeIdade);

let menorDeIdade = false;
console.log(menorDeIdade);

//array
let habilidades = ['javascript', 'PHP', 'Pyton'];
console.log(habilidades);
console.log(habilidades.length);
console.group(habilidades[1]);

// object
let pessoa = {
    nome: 'Fulano',
    Sobrenome: 'de Tal',
    idade: 20,
    habilidades: ['c++', 'c#']
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.habilidades[0]);

// undefined
let endereco
console.log(endereco);

// null
let cidade = null;
console.log(cidade)