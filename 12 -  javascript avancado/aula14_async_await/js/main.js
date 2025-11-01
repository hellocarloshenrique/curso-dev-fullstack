/* 
Fetch                                                   
*/

function  transformarEmJson(response) {
    return response.json()
    
}

function exibirNaTela(dados) {
    console.log(dados);
}

function exibirErro(dados) {
    console.log('Aqui ta  errado, parceiro');
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => 
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(transformarEmJson)
        .then(exibirNaTela)
        .catch(exibirErro)


//No uso de fetch nao precisaremos dessa abaixo requisicao inteira
/* 
function Fetch(url, method)  {
    return new Promise((resolve, reject)  => {
        const xhttp = new XMLHttpRequest()
    
        xhttp.onreadystatechange = function() {  
            if (this.readyState == 4 && this.status == 200) {
                const response = JSON.parse(this.responseText)

                resolve(resolve)
            }

            if (this.status  === 404) {
                reject()
            }
        }
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photosxx', true)
        xhttp.send()
    })
} 
    */
    
