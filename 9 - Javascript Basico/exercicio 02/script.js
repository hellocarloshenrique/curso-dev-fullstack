
let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')

// if (idade < 18 && nome === 'Thomas Anderson') {
//     document.writeln(`Ola, ${nome}, voce e MENOR de idade. Voce e o Neo do filme The Matrix`)
// } else if (idade >= 18 && nome === 'thomas anderson') {
//     document.writeln(`Ola, ${nome}, voce e MAIOR de idade. Voce e o Neo do filme The Matrix`)
// } else if (idade < 18) {
//     document.writeln(`Ola, ${nome}, voce e menor de idade.`)
// }   else {
//     document.writeln(`Ola, ${nome}, voce e maior de idade.`)
// }

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