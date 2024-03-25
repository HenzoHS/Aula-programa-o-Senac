let numero1 = parseFloat(prompt("Insira o primeiro valor."))
let numero2 = parseFloat(prompt("Insira o segundo valor."))
let numero3 = parseFloat(prompt("Insira o terceiro valor."))
let valores = [numero1 , numero2 , numero3]
function  comparar (numero1 , numero2) {
return numero1 - numero2;
}    
valores.sort(comparar);

console.log(valores);