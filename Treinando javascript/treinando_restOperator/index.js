/* 
Rest Operator - Ele coleta tudo que sobrar e empacota esses itens restantes em uma 
unica variavel (array ou objeto)
*/

//Exemplo The Matrix - A Equipe da Nabucodonossor
// Queremos extrair os líderes (Morpheus e Trinity) 
// e agrupar todos os outros tripulantes em uma única lista chamada equipeAuxiliar.

const tripulacao = ["Morpheus", "Trinity", "Link", "Cypher", "Tank"]

//Aqui nesse array vou fazer uma desestruturacao e separar os lideres dos demais
const [lider, colider, ...equipeAuxiliar] = tripulacao

console.log(lider);
console.log(colider);
console.log(equipeAuxiliar);


