let nuemro1 = parseFloat(prompt("Insira primeiro valor"))
let numero2 = parseFloat(prompt("Insira Segundo valor"))
let numero3 = parseFloat(prompt("Insira o terceiro valor"))
let soma1 = nuemro1 + numero2
let soma2 = nuemro1 + numero3
let soma3 = numero2 + numero3
let maior = Math.max (soma1 , soma2 , soma3 )

if (maior) {
    console.log("Esse é a maior soma " , maior , ".")
}