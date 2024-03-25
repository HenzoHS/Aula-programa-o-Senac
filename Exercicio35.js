let combustivel = {
    nome: prompt("É gasolina ou alcool?"),
    quantidade: parseFloat(prompt("Quantos litros você quer?"))
};

switch(combustivel.nome){
    case "gasolina":
        if(combustivel.quantidade <= 20){
            console.log("Compra realizada de " + combustivel.quantidade + " e custou " + ((combustivel.quantidade * 3.30) - ((combustivel.quantidade * 3.30) * 3/100)).toFixed(2));
        } else {
            console.log("Compra realizada de " + combustivel.quantidade + " e custou " + ((combustivel.quantidade * 3.30) - ((combustivel.quantidade * 3.30) * 5/100)).toFixed(2));
        } break
    case "alcool":
        if(combustivel.quantidade <= 20){
            console.log("Compra realizada de " + combustivel.quantidade + " e custou " + ((combustivel.quantidade * 2.90) - ((combustivel.quantidade * 2.90) * 4/100)).toFixed(2));
        } else {
            console.log("Compra realizada de  " + combustivel.quantidade + " e custou " + ((combustivel.quantidade * 2.90) - ((combustivel.quantidade * 2.90) * 6/100)).toFixed(2));
        } break

        default :
        console.log("Não fornecemos esse tipo de combustivel!");
}
    