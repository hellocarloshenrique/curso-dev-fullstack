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
