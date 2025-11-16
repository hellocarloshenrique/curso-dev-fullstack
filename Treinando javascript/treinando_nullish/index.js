/* 
// O  que e NULLISH?
// Nullish (??) - Uma melhoria do operador OU/OR ( || )
// O operador || considera qualquer valor que seja avaliado como falso (falsy) como INVALIDO, e busca o proximo  valor padrao.
// falsy (sao valores nao validos para o javascript).
// Os valores falsy sao:
//     - 0 (zero)
//     - "" (string vazia)
//     - false (booleano falso)
//     - null
//     - undefined
// Mas muitas vezes o valor  0 ou  uma string vazia, sao valores validos que voce quer manter.
// Por contado disso, o  nullish veio para resolver o problema. Ele só considera os valores como "inválidos" ou "ausentes" 
// se forem estritamente null ou undefined (os valores "nullish"). 
// Todos os outros valores, incluindo 0, false e "", são preservados.
*/

//usando ||
let quantidade1 = 0;

// O || considera 0 como "falso" e usa o valor padrão (1)
let quantidadeFinal1 = quantidade1 || 1; // Resultado: 1 (ERRADO, eu queria 0!)
console.log(quantidadeFinal1);

//usando ??
let quantidade2 = 0;

// O ?? considera 0 como VÁLIDO e o mantém
let quantidadeFinal2 = quantidade2 ?? 1; // Resultado: 0 (CORRETO!)
console.log(quantidadeFinal2);

//Exemplo Configuracao de um jogo
const gameConfig = {
    startingCoins: 2000,
}

const  character =  {
    coins: gameConfig.startingCoins || 1000,
}

console.log(character);


//Exemplo3 The Matrix

// Missao da nave nabucodonosor
// Imagine que a função de monitoramento da nabucodonosor (a nave de Morpheus) retorna informações sobre as missões. 
// Queremos definir um nível de ameaça padrão se a informação estiver faltando, mas aceitar 0 se a ameaça for "Nenhuma".

const MISSAO_MORPHEUS = {
    nome: "Encontro com o Oráculo",
    ameacaDetectada: 0, // 0 = Sem Ameaça (status válido)
};

const MISSAO_NEO = {
    nome: "Quebra de Regras",
    ameacaDetectada: undefined, // undefined = Informação não chegou
};

// Nosso valor padrão se a informação estiver ausente:
const AMEACA_PADRAO = 5; // Nível padrão alto


// Nível de Ameaça (Onde 0 é um valor válido)
const statusAmeacaMorpheus = MISSAO_MORPHEUS.ameacaDetectada ?? AMEACA_PADRAO; 
// Ameaça de Morpheus. Resultado: 0 (Válido). O '??' manteve o 0.

// : undefined (Ausente)
const statusAmeacaNeo = MISSAO_NEO.ameacaDetectada ?? AMEACA_PADRAO; 
// Ameaça de Neo. Resultado: undefined. Entao O '??' usou 5, o valor padrão.


// Se usássemos o operador || (OR Lógico) no primeiro caso, ele falharia em nosso objetivo. O || considera 0 como FALSO (falsy)

const statusAmeacaMorpheus_OR = MISSAO_MORPHEUS.ameacaDetectada || AMEACA_PADRAO;
// Resultado: 5. ERRADO! O || descartou o 0 válido e colocou o padrão 5. dizendo que havia ameaca quando nao havia. comprometendo a missao.


