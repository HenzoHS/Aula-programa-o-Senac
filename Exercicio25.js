let numero_conta =parseInt(prompt("Insira o número da sua conta."))
let saldo = parseFloat(prompt("Insira saldo atual."))
let debito = parseFloat(prompt("Insira a quantidade de gasto"))
let credito = parseFloat(prompt("Insira valor de credito"))
let saldo_atual = (saldo - debito + credito)

if(saldo_atual >= 0){
    document.write("Cliente " , numero_conta , "  Tem o saldo positivo")
} else {
    document.write("Cliente " , numero_conta , " Seu saldo esta negativo, por favor pagar o que deve.")
}