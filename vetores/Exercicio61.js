const numbers = [ 5 , 7 , 8 , 9]
const soma = numbers.reduce((acumulador,elemento) => acumulador + elemento , 0);
let media = soma/numbers.length
//for(let i = 0 ; i < 11 ; i++){
//    numbers.push(prompt("Insira os valores."))
//}

console.log("A media dos valores é " , media)
