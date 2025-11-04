const fs = require('fs');
const { json } = require('stream/consumers');

fs.readFile('./clientes.json', function(error, content) {

    if(error) {
        console.log('Opa, deu erro parceiro', error);
    } else  {
        console.log(JSON.parse(content));
    }
})