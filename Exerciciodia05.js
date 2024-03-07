let quantidade = parseInt(prompt("Quantidade de maças"))
let valor = parseFloat(1.3)
let valor_promo = parseInt(1)

if (quantidade >= 12) {
    console.log("Quantidade de maças foi: " + quantidade + " Valor total: " + "R$" + parseFloat(quantidade*valor_promo))
} else {
    console.log("Quantidade de maças: " + quantidade + " Valor total: " + "R$" + parseFloat(quantidade*valor).toFixed(2) )
}
