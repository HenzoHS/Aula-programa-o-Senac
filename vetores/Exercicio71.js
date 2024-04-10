let quant = parseInt(prompt("Insira a quantidade de numeros"))
let val = []
let soma = 0
for(let i = 0; i < quant; i++){
    val[i] = parseFloat(prompt("Insira o valor"))
}

for(i = 0 ; i < val.length ; i++){
    soma += val[i]
}

let maior = Math.max.apply(Math,val)
let media = ((soma/val.length).toFixed(2))

console.log("O maior numero insirido foi " , maior , " e a  media dos numeros foram " , media)