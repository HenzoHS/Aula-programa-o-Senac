let temps = []
let soma = 0
let dias = prompt("Insira a quantidade de dias que você deseja inserir a temperatura")

function temperaturas(){
    for(let i = 0; i < dias ; i++)
    temps.push (parseFloat(prompt("Insira a temperatura")))
} 

temperaturas()
let max = Math.max.apply(Math,temps)
let min = Math.min.apply(Math,temps)
for(i = 0 ; i < temps.length ; i++){
    soma += temps[i]
}
let media = (soma/temps.length)
let inf = 0

temps.map (function(temps){
    if(temps < media){
        inf++
    }
})

console.log("A menor temperatura do ano foi " , min , "º" )
console.log( "A maior temperatura do ano foi " , max , "º")
console.log( "A media da temperatura anual foi " , media , "º")
console.log( "E o numero de dias inferior a media anual foi" , inf)