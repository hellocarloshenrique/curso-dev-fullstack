/* 
Callbacks
*/

function exibirNaTela(dados) {
    console.log('Exibir na tela', dados);
}


const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => carregarFotos(exibirNaTela)

function carregarFotos(Callback)  {
    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function() {  
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
        
            if  (Callback) {
                Callback(response)
            }
        }
    }
    xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
    xhttp.send()
}
