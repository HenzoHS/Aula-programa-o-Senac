let numbers =[]
let nun = []

for(let i = 0 ; i < 11 ; i++){
    numbers.push(prompt ("Insira o valor desejado"))
    if(numbers[i] >= 10 || numbers <= 20){
       nun.push(numbers[i])
}
}

console.log(nun.length)