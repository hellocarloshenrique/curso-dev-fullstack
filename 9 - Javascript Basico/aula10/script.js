let imputNota1 = prompt('Digite a primeira nota: ')
let imputNota2 = prompt('Digite a segunda nota: ')

let nota1 = parseInt(imputNota1)
let nota2 = parseInt(imputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

console.log(media)

if (media >= mediaMinima) {
    document.write('Ok, passou de ano')
} else if(media < mediaMinima) {
    document.write('Ops! Você não passou de ano.')
} 

document.write('<br>')

if (media >= mediaMinima && media === 10) {
    document.write('Wow! Você foi muito bem!')
}else if (media >= mediaMinima && media === 9) {
    document.write('Você mandou bem! Vamos tentar chegar na nota 10.')
}

if (media < mediaMinima && media === 5) {
    document.write('Ta ruim, hein! bora melhor essa nota')
} else if (media < mediaMinima && media === 3) {
    document.write('MInha nossa! você não pensou em estudar não, hein?')
}