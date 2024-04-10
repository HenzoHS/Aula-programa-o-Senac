let notas = []

function nota (){
    for(let i = 0 ;  i < 3 ; i++){
        notas.push (parseFloat(prompt("Insira nota")))
    }
}

nota()

let soma = 0
for(i = 0  ; i < notas.length ; i++ ){
    soma += notas[i]
}

let media = ((soma/notas.length).toFixed(2))
let quant_pass = 0


notas.map (function (nota){
    if(nota >= media){
        quant_pass++
    }

})

console.log("A quantidade de alunos que passaram foi" , quant_pass , " e a media foi " , media)