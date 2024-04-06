let valor = parseFloat(prompt("Insira o primeiro valor"))
let valor2 = parseFloat(prompt("Insira o segundo valor"))
let cont = 0

if(valor>valor2){

for(let i = valor; i >= valor2; i--){
        cont += i 
        console.log(i)
}
document.write("A soma dos numeros entre os valores, " , valor , ", " , valor2 , " é " , cont)
} else {
    for(let i = valor; i <= valor2; i++){
        cont += i 
        console.log(i)
}
document.write("A soma dos numeros entre os valores, " , valor , ", " , valor2 , " é " , cont)
}