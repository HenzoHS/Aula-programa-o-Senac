let numbers =[]
let nun = []

for(let i = 0 ; i < 4 ; i++){
   let numbe= parseFloat(prompt ("Insira o valor desejado"))
    if(numbe >= 10 && numbe <= 20){
       nun.push(numbe)
    }else {
        numbers.push(numbe)
    }
}

console.log("A quantidade de numeros dentro do intervalo entre 10 e 20 " + nun.length +  " e os fora do intervalo " + numbers.length)