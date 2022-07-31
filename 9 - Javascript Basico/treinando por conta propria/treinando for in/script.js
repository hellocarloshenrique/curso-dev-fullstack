const pessoa = {
    nome: 'carlos',
    idade: 31
};

for(let chave in pessoa) {
    console.log(chave,pessoa['nome']);
}

const cores = ['vermelhor', 'azul', 'verde'];

for(let indice in cores) {
    console.log(indice,cores[indice])
}