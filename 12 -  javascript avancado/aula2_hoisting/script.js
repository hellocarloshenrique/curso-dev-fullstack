

function primeiraFuncao() {
    outraFuncao() // <<< outra funcao declara (icada) antes de ser criada

    function outraFuncao() {
        console.log('Ok, sou a outra funcao');
        
    }
    //outraFuncao() <<< outra funcao sendo chamada. vamos erguer ela la pra cima
}

primeiraFuncao() // <<< primeira funcao sendo chamada

//obs.: essa nao e uma boa pratica mais em algum momento pode ser usadd se necessario