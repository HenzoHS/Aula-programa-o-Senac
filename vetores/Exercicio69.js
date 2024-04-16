const estoq = 500

switch (estoq){
    case "N" :
    document.write("A compra sera realizada na proxima semana");
    break;
    case "S":
        let val = 0

for(let i = 0 ; i < 3 ; i++){
    val =+ parseFloat(prompt("Insira o valor dos produtos"))
}

let val_estoq = (estoq * val)
let media = (val_estoq / estoq).toFixed(2)
document.write("A quantidade de mercadoria em estoque é " , estoq , " e o valor medio das mercadorias em estoque é R$" , media);
    break;
    default :
    document.write("Responda com 'S' ou 'N' ")
        }
