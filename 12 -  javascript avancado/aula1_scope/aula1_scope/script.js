/**
 * Global e local
 */


//esta variavel esta dentro do escopo da funcao (local)
function teste1() {
    let a = 123 // <<< A variavel
    console.log(a)
}

teste1()


//esta variavel esta dentro do escopo global
let a = 123 // <<< A variavel

function teste2() {
    console.log(a)
}

teste2()
