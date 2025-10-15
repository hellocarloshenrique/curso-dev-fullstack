const clientes = [
    {name: 'Carlos', lastname: 'Damasceno'},
    {name: 'Elizabeth', lastname: 'Silveira'},
    {name: 'Elias', lastname: 'Ferreira'},
]

const clienteFinal = clientes.map((cliente) => {
    return cliente.name + ' ' + cliente.lastname
})

console.log(clienteFinal);


//Usando retorno implicito na minha arrow function
//removo parenteses, chaves e a palavra return
const clienteFinalRI = clientes.map(cliente => 
    cliente.name + ' ' + cliente.lastname
)

console.log(clienteFinalRI);



//Outro bom exemplo abaixo:

const numeros = [1, 2, 3, 4];

// Para cada 'numero', retorne o 'numero * 2'
const dobrados = numeros.map(numero => {
    return numero * 2;
});

console.log(dobrados); // Saída: [2, 4, 6, 8]
console.log(numeros);  // Saída: [1, 2, 3, 4] -> O original NÃO mudou!