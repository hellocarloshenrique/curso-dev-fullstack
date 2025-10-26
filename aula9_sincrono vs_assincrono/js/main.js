
/* 
Sincrono vs Assincrono
 */

function primeira() {
    console.log('primeira');
}

function sesgunda() {
    console.log('segunda');
}

// primeira()
setTimeout(primeira, 3000) 
/* 
Assincrono: Ele nao espera a execucao do codigo,
ele entende que vai levar um tempo (3000s), dasequencia
no codigo e depois executa essa acao.
 */

sesgunda()