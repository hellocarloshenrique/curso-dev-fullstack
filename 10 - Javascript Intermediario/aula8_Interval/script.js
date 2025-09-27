let contador = document.querySelector('#contador')
let btnPause = document.querySelector('#btnPause')

let count = 0

let intervalo = setInterval(function() {
    count++
    contador.innerText = count
}, 100)


btnPause.onclick = function () {
    clearInterval(intervalo)
}