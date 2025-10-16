const clientes = [
    {name: 'Carlos', lastname: 'Damasceno', age: 14},
    {name: 'Elizabeth', lastname: 'Damasceno', age: 18},
    {name: 'Elias', lastname: 'Ferreira', age: 20},
]

//filtgrando clientes com idade igual/acima de 18
const clientesMaiorIdade = clientes.filter(cliente => {
    let retorno = false
    if (cliente.age >= 18) {
        return true  
    }

    return retorno
})

console.log(clientesMaiorIdade);


//filtrando clientes com o sobrenome Damasceno
const clientesDamasceno = clientes.filter(cliente => {
    let retorno = false
    if (cliente.lastname === 'Damasceno') {
       return true 
    }

    return retorno
})

console.log(clientesDamasceno)

//IF Ternario (IF de uma linha so)

const clientesCarlos = clientes.filter(cliente => {
    return cliente.name === 'Carlos' ? true : false 
    //ou
    // 
    //return cliente.name === 'Carlos'
})

console.log(clientesCarlos);
