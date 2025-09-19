
let nome = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')

if (idade < 18) {
    document.writeln(`Ola, ${nome}, voce e MENOR de idade.`)
} else {
    document.writeln(`Ola, ${nome}, voce e MAIOR de idade`)
}