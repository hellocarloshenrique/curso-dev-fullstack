let diaSemana = new Date().getDay()

let nomeDiaSemana

switch(diaSemana) {
     case 0:
          nomeDiaSemana = 'Domingo'
          break;
     case 1:
          nomeDiaSemana = 'segunda'
          break;
     case 2:
          nomeDiaSemana = 'Terca-feira'
          break;
     case 3:
          nomeDiaSemana = 'Quarta'
          break;
     case 4:
          nomeDiaSemana = 'Quinta'
          break;
     case 5:
          nomeDiaSemana = 'Sexta'
          break;
     case 6:
          nomeDiaSemana = 'Sabado'
          break;
     }

     document.writeln(`hoje o dia e ${nomeDiaSemana}`)