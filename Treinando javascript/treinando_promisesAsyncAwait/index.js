// Exemplo Matrix: Download do Kung Fu para Neo

function fazerDownloadDeHabilidade(habilidade) {
    return new Promise((resolve, reject) => {
        const tempoDownload = Math.random() * 5000 + 1000

        if (habilidade === 'Kung Fu') {
            setTimeout(() => {
                resolve(`Download de ${habilidade} CONCLUIDO.`)
            }, tempoDownload);
        } else {
            reject(new Error(`Falha no download da habilidade ${habilidade}. O agente Smith esta na linha.`))
        }
    })
}

async function carregarHabilidadesNeo() {
    console.log('Morpheus: Preparando a tranferencia de dados...');

    try {
        // Essa primeira promise espera o download do Kung Fu
        const resultadoKungFu = await fazerDownloadDeHabilidade('Kung Fu')
        console.log(`✅ Resultado: ${resultadoKungFu}`);

        // Essa segunda promise espera o dowload Voo que vai falhar
        // const resultadoVoo = await fazerDownloadDeHabilidade('Voo')
        // console.log(`✅ Resultado: ${resultadoVoo}`);
                
    } catch (erro) {
        console.error(`❌ Erro na Transferencia: ${erro.message}`);
        
    } finally {
        console.log('Morpheus: Tranferencia finalizada. Levante-se, Neo');
    }
    
}

carregarHabilidadesNeo()

// Note que esta linha executa imediatamente, pois o JS não espera a função async terminar.
console.log('Operacao assincrona iniciada. O programa continua rodando...');
