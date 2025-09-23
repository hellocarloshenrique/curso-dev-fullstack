
// let nome = prompt('Digite seu nome')
// let idade = prompt('Digite sua idade')

function entrada() {
    const nomeLimpo = nome.toLowerCase();
    
    if (nomeLimpo === 'thomas anderson') {
        if (idade < 18) {
            document.writeln(`Ola, ${nome}, voce e MENOR de idade. Voce e o Neo do filme The Matrix`)
        } else {
            document.writeln(`Ola, ${nome}, voce e MAIOR de idade. Voce e o Neo do filme The Matrix`)
        }
    } else if (idade < 18) {
        document.writeln(`Ola, ${nome}, voce e menor de idade.`)
    } else {
        document.writeln(`Ola, ${nome}, voce e maior de idade.`)
    }
}
