// Exemplo com numeros
const temperatura = [28, 32, 25, 35, 29, 31];

const temperaturaMaxima = temperatura.reduce((maxTemp, tempAtual) => {
    //maxTemp >>> Acumulador com o valor inicial 0 (zero)
    // Compara o acumulador com a temperatura que esta sendo iterada do tempAtual
    if (tempAtual > maxTemp) {
        return tempAtual // O acumulador sempre vai ser a temperatura mais alta
    } else {
        return maxTemp // Mantem o acumulador atual, quie no caso vai ser o mmairo valor encontrado ate o momento
    }
}, 0)//Aqui no segundo argumento do reduce(), o acumulador (maxtemp), comeca com zero. 


console.log('Temperaturas', temperatura);
console.log('Temperatura Maxima Encontrada', temperaturaMaxima);



//---------------------------------------------------
//Exemplo com Strings
const palavras = ['A', 'programação', 'é', 'incrível', 'e', 'útil'];

const fraseCompleta = palavras.reduce((fraseAcumulada, palavraAtual) => {
    return fraseAcumulada + ' ' + palavraAtual
}, '')

console.log('Frase Completa:', fraseCompleta.trim());



//---------------------------------------------------
//Exemplo com objeto (calculando media ponderada)
const notas = [
    {materia: 'Portugues', nota: 8, peso: 2},
    {materia: 'Matematica', nota: 9, peso: 3},
    {materia: 'Historia', nota: 7, peso: 1},
]

const mediaPonderada = notas.reduce((somaPonderada, disciplina) => {
    const valorponderado = disciplina.nota * disciplina.peso

    return somaPonderada + valorponderado
}, 0)

const somaPesos = notas.reduce((totalPesos, disciplina) => totalPesos + disciplina.peso, 0)

const mediaFinal = mediaPonderada / somaPesos

console.log('Notas:', notas);
console.log('Soma das notas ponderadas:', mediaPonderada);
console.log('Soma dos pesos:', somaPesos);
console.log('Media final:', mediaFinal.toFixed(2));




