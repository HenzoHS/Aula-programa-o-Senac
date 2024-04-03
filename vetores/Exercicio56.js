let number = parseFloat(prompt("Qual tabuada você deseja?"))
while(number < 1 || number > 10){
    number = parseFloat(prompt("Qual tabuada você deseja?"))
}

for(let i = 1 ; i < 11 ; i++) {
    let tabuada = i * number
    document.write(tabuada , ", ")
}