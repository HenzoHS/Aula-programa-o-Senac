

let n = parseFloat(prompt("Digite um numero"));

while(n <= 0){
    n = parseFloat(prompt("Digite um novamente"));
}

for(i = 0; i < (n + 1) ; i++){
    document.write(i , ", ")
}