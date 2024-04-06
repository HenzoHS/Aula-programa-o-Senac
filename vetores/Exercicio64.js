let mais = 0
for(let i = 0; i< 11 ; i++){
    val = parseFloat(prompt("Insira os valores"))
    if(val <= 40){
        mais += val
    }
}
console.log(mais)