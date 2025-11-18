//lapis preto ou colorido
//estrutura
// condicao ? valor_se_verdadeiro : valor_se_falso

let blackPencil = 'white'
let color = blackPencil === 'white' ? `${blackPencil} e colorido` : `${blackPencil} e preto`
console.log(color);

// Status do Semáforo (Booleano)
const semaforoAberto = true
const corSemaforo = semaforoAberto ? 'verde. Pode seguir.' : 'vermelho. Fique aonde esta.'
console.log(`O semaforo esta ${corSemaforo}`);


// Status da Conta (Numérico)
const saldo = -100
const statusConta = saldo > 0 ? 'Conta ativa.' : 'Conta em divida'
console.log(statusConta);

// Mensagem de Boas-Vindas (String)
const capitaoNave = 'Morpheus'
const mensagem = capitaoNave ? `Seja bem-vindo, ${capitaoNave}` : 'Voce nao e o caotao da nave.'
console.log(mensagem);

// perador ternario aninhado (if else / if else)

const missoesConcluidas = 22
const classificacao = missoesConcluidas >= 10
    ? 'Veterano'
    : missoesConcluidas >= 3
    ? 'Piloto ativo'
    : 'Iniciante'

console.log(classificacao);
