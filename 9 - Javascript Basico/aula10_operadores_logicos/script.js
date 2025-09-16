let  imputNota1 = prompt('Digite a primeira nota')
let  imputNota2 = prompt('Digite a saegunda nota')

let nota1 = parseInt(imputNota1)
let nota2 = parseInt(imputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

document.writeln(`Sua media e ${media}.`)

if (media >= mediaMinima) {
     document.writeln(' Aprovado')
     
} else if (media < mediaMinima) {
     document.writeln(' <b>Reprovado</b>')
}

document.writeln('<br>')

if (media >= mediaMinima && media === 10) {
    document.writeln('Nossa! Mandou bem demais.') 
} else if (media >= mediaMinima && media === 9) {
     document.writeln('Voce mandou bem! Vamos tentar o 10 na proxima')
} else if (media >= media && media === 9.5) {
     document.writeln('Quase la meu bom.')
} else {
     document.writeln('Voce e meio burro')
}