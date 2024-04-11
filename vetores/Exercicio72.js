let cod = []
let preco = []

for(let i = 0 ; i < 3 ; i++){
    cod.push (parseInt(prompt("Insira o codigo de barras do produto")))
    preco.push(parseFloat(prompt("Insira o valor do produto")))
}


let soma = 0

for(i = 0 ; i < preco.length ;i++){
  soma += preco[i]
}
let media = (soma/preco.length).toFixed(2)
let maio = Math.max.apply(Math,preco)

console.log("O maior preço dos produtos foi " , maio)
console.log("A media aritmética dos preços foi " , media)