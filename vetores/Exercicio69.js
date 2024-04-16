let temEstoque = prompt("Há mercadorias em estoque? Responda 'S' para sim ou 'N' para não")

switch (temEstoque) {
    case "N":
        document.write("A compra será realizada na próxima semana");
        break;
    case "S":
        let totalValor = 0;

        for (let i = 0; i < 3; i++) {
            let valorProduto = parseFloat(prompt("Insira o valor do produto"));
            totalValor += valorProduto;
        }

        let mediaValor = (totalValor / 3).toFixed(2);
        document.write("O valor médio das mercadorias em estoque é R$" + mediaValor);
        break;
    default:
        document.write("Responda com 'S' ou 'N'");
}
