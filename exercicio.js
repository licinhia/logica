const escrever = require("readline-sync")
var idade = parseInt (escrever.question("Qual é a sua idade?"))
if(idade<12){
    console.log("Não pode entrar no filme, mas pague a meia entrada 15,00R$")
}if(idade>=12 && idade <=15){
    console.log("Não pode entrar no filme, mas pague a entrada inteira de 30,00R$")
}if(idade>= 16){
    console.log("Pode assistir o filme e pague a meia entrada de 15,00R$")
} if(idade >= 60){
    console.log("Pode assistir o filme e pague a entrada de 15,00R$")
}