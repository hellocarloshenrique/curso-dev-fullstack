/* 
Usando Json
*/

// Json.parse string recebida convertida em objeto

const textoRecebido = '{"produto": "cafe", "preco": 15}';
const objJsConvertido = JSON.parse(textoRecebido)

console.log(objJsConvertido);
console.log(objJsConvertido.produto);
console.log(objJsConvertido.preco);



/* Json.stringfy objeto convertido em string para 
empacotar e enviar
 */

const dadosParaEnviar = {nome: "Ana", idade: 25};
const stringJson = JSON.stringify(dadosParaEnviar)

console.log(stringJson);
