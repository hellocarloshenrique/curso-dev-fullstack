

let idade = prompt('Digite a idade: ')

if (idade >= 18) {
     console.log('Ok, voce e maior de idade'); //imprimindo no console
     document.writeln('Ok, voce e maior de idade') //imprimindo no navegador
} else if (idade == 15){
     document.writeln('Voce tem 15')
     console.log('Voce tem 15');
} else {
     console.log('Tu e menor de idade parca');
     document.writeln('Tu e menor de idade parca. Rala')     
}


let nome = prompt('Digite seu nome')

     if (nome == 'Carlos') {
          document.writeln(`\nOla, ${nome}, seja bem vindo`)
     } else {
          document.writeln('voce nao tem acesso admin')
     }