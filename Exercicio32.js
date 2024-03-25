let time1 = prompt("Qual é o primeiro time a entrar no campo?")
let time2 = prompt("Qual é o segundo time a entrar em campo?")
let gols1 =parseInt(prompt("Quantos gols o primeiro time marcou?"))
let gols2 = parseInt(prompt("uantos gols o segundo time marcou?"))

if (gols1 > gols2) {
    console.log("O time vencedor foi o " ,  time1 , " , marcando " , gols1 , " gols")
} else if (gols2 > gols1) {
    console.log("O time vencedor foi o " ,  time2 , " , marcando " , gols2 , "gols.")
} else{
    console.log("Empate")
}