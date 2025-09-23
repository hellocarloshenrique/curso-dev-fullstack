function executarDepois(nome, callback) {
    console.log(`Preparando para executar a tarefa para ${nome}`);

    callback()
}

function tarefaConcluida() {
    console.log('Tarefa concluida');    
}

executarDepois('Carlinhos', tarefaConcluida)