let valores = []


for(let i = 0 ; i < 4 ; i++){
    valores.push  (parseFloat(prompt("Insira os valores"))) 
}

let max = Math.max.apply(Math,valores)
let mini = Math.min.apply(Math,valores)
console.log("Maior valor: " , max , " Menor valor: " , mini)
