let hora_inicio = parseInt(prompt("Hora de inicio de jogo"))
let hora_termin = parseInt(prompt("Hora do termino de jogo"))
if( hora_termin < hora_inicio){
    console.log("Seu tempo de jogo foi " , (24 - hora_inicio) + hora_termin , " horas, termino no dia seguinte")
} else if(hora_termin > hora_inicio){
    console.log("Seu tempo de jogo foi " , hora_termin - hora_inicio , " horas, terminou no mesmo dia.")
} else {
    console.log("Seu tempo de jogo foi " , (hora_inicio == hora_termin) , " 24 horas")
}