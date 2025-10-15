/* 
arrow functions

As funcoes de seta nos permitem escrever uma sintaxe
de funcao mais curta.
*/

const  teste1 = (param1, param2) => {
    console.log(param1, param2);
}

teste1(1, 6)


// sintaxe padrao
const teste2 = (param1, param2) => {
    return param1 + param2
}

const resultado = teste2(1, 4)

console.log(resultado);

// sintaxe mais curta (Retorno Implicito)
const teste2Curto = (param1, param2) => param1 + param2
/* Por ser apenas um retornoi, aqui eu removi as chaves 
e a palavra return, e apenas coloquei os dados do 
return na frente da arrow.
*/
const resultadoCurto = teste2Curto(100, 4)

console.log(resultadoCurto);

/*Quando uma arrow function  tem apenas um parametro,
nao precisa colocar paratenses ().
*/
const testeApenas1Param = param1 => param1

const resultDoTesteApenas1Param = testeApenas1Param(4)
console.log(resultDoTesteApenas1Param)