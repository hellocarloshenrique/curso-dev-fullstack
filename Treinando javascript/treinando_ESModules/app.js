//Este e o arquivo importador

// Importando o export padrão (podemos dar qualquer nome a ele, ex: "bemVindo")
import bemVindo from './utils.js'

// Importando exports nomeados (precisam do nome exato e chaves {})
import { NAVE_PADRAO, calculartempoDeConexao } from './utils.js'


// --- Uso no app.js ---

console.log(bemVindo('Neo'));

console.log(`Nave atual: ${NAVE_PADRAO}`);

console.log(calculartempoDeConexao(3));


