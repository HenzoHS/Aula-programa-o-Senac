let ano_Nasci = parseInt(prompt("Insira seu ano de nascimento."))
let ano_atual = 2024
let idade = (ano_atual- ano_Nasci)

if(idade >= 16){
    console.log("Parabéns você tem " + idade + " anos, É requesitada sua presença para votar!")
} else {
    console.log("Sua idade é " + idade + " anos, Você não podera votar.")
}