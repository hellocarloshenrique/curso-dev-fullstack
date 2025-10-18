/* 

Json - Javascript Objetc Notation
antes de Json era usado XML
*/

const objeto = {
    nome: 'Fulano',
    idade: 23,
}

//transformando o Json em string
const jsonTeste = JSON.stringify(objeto)

/* 
tranformando agora em objeto, assim eu consigo buscar
o item .idade ou .nome de dentro do objeto objeto
*/

const jsonParseado = JSON.parse(jsonTeste)


console.log(jsonParseado);
console.log(jsonParseado.idade);
