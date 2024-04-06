let val = 0
let cont = 0
for( i = 0; i < 11 ; i++){
    val += parseFloat(prompt("Insira os valores"))
    cont++
}
document.write((val/cont).toFixed(2))