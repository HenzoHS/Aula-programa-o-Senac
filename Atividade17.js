let avaliação_um = parseFloat(prompt("Insira a sua primeira nota."))
let avaliação_dois = parseFloat(prompt("Insira a sua segunda nota."))
let resultado = ((avaliação_um + avaliação_dois) / 2).toFixed(2)

if(resultado >= 6) {
    console.log("Sua nota foi: " + resultado + " Aprovado!")
} else {
    console.log("Sua nota foi: " + resultado + " Reprovado!")
}