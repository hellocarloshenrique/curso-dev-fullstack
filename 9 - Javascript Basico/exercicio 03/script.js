
function entrada() {
    let nome = prompt("Olá! Digite seu nome: ") 
    let idade = prompt("Qual a sua idade?")
        
        
        if(nome.toLowerCase() == 'neo' && idade < 18) {
            document.write(`Olá, ${nome}! Você é menor de idade. Você é personagem do filme Matrix!`)
        } else if(nome.toLowerCase() == 'neo' && idade >= 18) {
            document.write(`Olá, ${nome}! Você é maior de idade. Você é personagem do filme Matrix!`)
        }else if(idade < 19) {
            document.write(`Olá, ${nome}! Você é menor de idade.`)
        } else{
            document.write(`Olá, ${nome}! Você é maior de idade.`)
        }
}


//chamei a função entrada dentro do index.html com "<button onclick="entrada()">Entrar</button>"

    