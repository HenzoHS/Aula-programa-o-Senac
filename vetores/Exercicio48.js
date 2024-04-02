let nota1 = parseFloat(prompt("Insira a primeira nota"))
let nota2 = parseFloat(prompt("Insira a segunda nota"))

while((nota1 < 0 || nota1 > 10) || (nota2 < 0 || nota2 > 10)){
    if(nota1 < 0 || nota1 > 10){
        nota1 = parseFloat(prompt("Insira a primeira nota"))
     }else if(nota2 < 0 || nota2 > 10){
        nota2 = parseFloat(prompt("Insira a segunda nota"))
     }
}