let estoq = parseInt(prompt("Insira a quantidade de mercadorias em estoque"))
let val = 0

for(let i = 0 ; i < 3 ; i++){
    val =+ parseFloat(prompt("Insira o valor dos produtos"))
}

let val_estoq = (estoq * val)
let media = (val_estoq / estoq).toFixed(2)
console.log("A quantidade de mercadoria em estoque é " , estoq , " e o valor medio das mercadorias em estoque é R$" , media)
