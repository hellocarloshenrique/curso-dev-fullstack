const clientes = [
    {name: 'Carlos', score: 38},
    {name: 'Elizabeth', score:97},
    {name: 'Elias', score:40},
    {name: 'Deborah', score: 38},
    {name: 'Marcos', score:99},
    {name: 'David', score:40},
]

//acc = accumulator
//curr = current

const clientesFinal = clientes.reduce((acc, curr) => {
    if(curr.score >= 50) {
        acc.pass.push(curr)
    } else {
        acc.fail.push(curr)
    }

    return acc

}, {
    pass: [],
    fail: []
})

console.log(clientesFinal);


//-----------------------------------------------------
//outro exemplo

const preco = [10.5, 20.0, 5.5, 50.0];

const total = preco.reduce((acc, preco) => {
    //acc comeca em 0, depois sera 10.5, depois 30.5, etc
    return acc + preco;
}, 0)

console.log(total);


//-----------------------------------------------------
//outro exemplo

const numeros = [10, 20, 5, 50];


const numeroFinal = numeros.reduce((acc, curr) => {
    acc += `${curr + 1} - `
    return acc;
}, '')

const numeroFinalSemIfen = numeroFinal.slice(0, -3)
console.log(numeroFinalSemIfen);
// saida: '11 - 21 - 6 - 51'