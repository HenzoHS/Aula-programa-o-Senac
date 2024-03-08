let horas = parseInt(prompt("Insira a quantidade de horas tabalhadas no mês."))
let salario =  parseFloat(prompt("Insira valor que ganha por hora trabalhada."))
let hora2 = horas - 160
let hora_extra = ((salario *(50/100)))
if(horas > 160){
    console.log( "Seu salario foi de R$: " , (hora2 * hora_extra) + (horas * salario))
} else {
    console.log( horas * salario)
}