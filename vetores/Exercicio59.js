let numbers =[]
let nega = []

for(let i = 0 ; i < 11 ; i++){
    numbers.push(prompt ("Insira o valor desejado"))
    if(numbers[i] < 0){
       nega.push(numbers[i])
}
}

console.log(nega.length)

