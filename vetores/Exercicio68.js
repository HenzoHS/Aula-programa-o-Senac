let number = parseInt(prompt("Insira a quantidade de mercadorias no estoque"))
let val = parseFloat(prompt("Insira o valor de mercadoria"))
while(val <= 0){
    val =parseFloat(prompt("Insira um valor valido"))
}