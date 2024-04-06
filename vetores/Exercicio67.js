let valor = 0
let cont = 0

for(let i = 15 ; i <= 100; i++){
    valor = i
        cont += i
        console.log(i)
}
document.write("A media aritmetica dos numeros 15 e 100 é" , ((cont/(100-15)).toFixed(2)))
