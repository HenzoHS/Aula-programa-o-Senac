let notas = 0
//let soma = notas.reduce((acumulador,elemento) =>  acumulador + elemento , 0)
let cont = 0 

for(let i = 1 ; i < 4 ; i++){
    notas += parseFloat(prompt("insira as notas por ordem alfabetica dos alunos."))
    cont++
}
console.log((notas/cont).toFixed(2))