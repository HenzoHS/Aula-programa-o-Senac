let a = parseFloat(prompt("Insira o valor do primeiro lado"))
let b = parseFloat(prompt("Insira o valor do lado dois."))
let c = parseFloat(prompt("Insira o valor do lado três"))


if ( a > b + c) {
    console.log("É um triangulo")
} else if (b > a + c) {
    console.log("É um triangulo")
} else if (c > a + b) {
    console.log("É um triangulo")
} else {
    console.log("Não é um triangulo")
}