
/* prompt("Olá! Digite seu nome: ")
prompt("Qual a sua idade?") */

nome = prompt("Olá! Digite seu nome: ") 
idade = prompt("Qual a sua idade?")

/* if(idade < 19) {
    console.log("Olá, "+nome+"! Você é menor de idade.")
} else {
    console.log("Olá, "+nome+"! Você é maior de idade.")
} */

if(idade < 19) {
    document.write(`Olá, ${nome}! Você é menor de idade.`)
} else {
    document.write(`Olá, ${nome}! Você é maior de idade.`)
}