function tentarConexao(nomeConsole) {
    return new Promise((resolve, reject) => {
        //Console 'serralheiro' e um alvo facil. Qualquer outro e um riscco a missao.
        if (nomeConsole === 'Serralheiro') {
            setTimeout(() => {
                resolve(`Conexao estabelecida com sucesso: Console ${nomeConsole}`)
            }, 1000)
        } else {
            setTimeout(() => [
                reject( (`Interrupcao do Sistema: O Agente Smith bloqueou o Console ${nomeConsole}`))
            ], 3000)
        }
    })
}

async function  rackearConsoles() {
    console.log('Morpheus: Neo, inicie a sequencia de hacking.');

    try {
        // 1. Primeira tentativa de invasao (Sucesso esperado)
        console.log('Tentando console Serralheiro...');
        const resultado1 = await tentarConexao('Serralheiro')
        console.log(resultado1); // aqui como sabemos que vai ser sucesso o code continuar

        // 2. Segunda tentativa (falha esperada)
        console.log('Tentando console Central de Energia...');
        const resultado2 = await tentarConexao('Central de Energia')
        
        // Se a Promise do resultado2  for rejeitada, e vai, o codigo para aqui
        // E pula para o bloco do catch aqui abaixo. Esta linha NUNCA sera executada.
        console.log(resultado2);

    } catch(erro) {
        console.error(`\n ERRO FATAL: ${erro.message}`);
    } finally {
        console.log(`\nFIM: Operacao de racking concluida (com ou sem falhas).`);
        
    }
}

rackearConsoles()