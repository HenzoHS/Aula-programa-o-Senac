let salario = []
let filhos = []
let quant = parseInt(prompt("Insira a quantidade de habitantes que tera os dados recolhidos"))

for(let i = 0 ; i < quant ; i++){
    salario.push (parseFloat(prompt("Insira o valor de seu salário")))
    filhos.push (parseInt(prompt("Insira a quantidade de filhos que o habitante")))
}

let soma_sala = 0
let soma_fi = 0

for(i = 0 ; i < quant ; i++){
    soma_sala += salario[i]
    soma_fi += filhos[i]
}

let media_sal = (soma_sala/salario.length).toFixed(2)
let media_fi = (soma_fi/filhos.length)
let maior_sala = Math.max.apply(Math,salario)
let inf = 0

for(let i = 0 ; i < quant ; i++){
if(salario[i]<150){
    inf++
}
}

console.log("Média de salário da população: ", media_sal)
console.log("Média do número de filhos: ", media_fi)
console.log("Maior salário dos habitantes: ", maior_sala)
console.log("Percentual de pessoas com salário menor que R$ 150,00: ", ((inf*100)/quant).toFixed(2) + "%")