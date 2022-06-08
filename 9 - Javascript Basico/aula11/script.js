/*
comando para pegar dias da semana
let diaDaSemamna = new Date(). getDay()
*/
let diaDaSemamna = 5

let nomeDiaDaSemana

switch (diaDaSemamna) {
    case 0:
    nomeDiaDaSemana = 'Domingo'
        break;
    case 1:
    nomeDiaDaSemana = 'Segunda-feira'
        break;
    case 2:
    nomeDiaDaSemana = 'Terça-feira'
        break;  
    case 3:
    nomeDiaDaSemana = 'Quarta-feira'
        break;
    case 4:
    nomeDiaDaSemana = 'Quinta-feira'
        break;   
    case 5:
    nomeDiaDaSemana = 'Sexta-feira'
        break;
    case 6:
    nomeDiaDaSemana = 'Sábado'
        break;     
}

document.write(`O dia da semana é: ${nomeDiaDaSemana}`)