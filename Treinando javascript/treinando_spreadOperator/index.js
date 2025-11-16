/* 
Spread Operator - Principal uso e o de criar copias rasas ou combinar colecoes sem 
alterar o original

*/

//Exemplo The Matrix - Armas no inventario

const arsenalZion = ['rifle', 'Granada', 'Pistola']
const novasArmas = ['Katana', 'Shotgun']

//o spread operator (...) vai desempacotar os arays para criar um novo
const invetarioNeo = [...arsenalZion, ...novasArmas, '.40', 'Faquinha']

console.log(invetarioNeo);
