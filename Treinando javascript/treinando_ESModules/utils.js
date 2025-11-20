//Este e o arquivo exportador

//Export nomeado  (pode haver mais de um exports por arquivo)
export const NAVE_PADRAO = 'Nabucodonossor'

// Export padrao(default) - so pode haver UM por arquivo
export default function saudacao(nome) {
    return `Bem-vindo, ${nome}. Pegue a pilula vermelha`
}

// Outro export nomeado
export function calculartempoDeConexao(horas) {
    return `Conexao por ${horas}h.`
}