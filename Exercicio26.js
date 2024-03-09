let estoque_atual = parseInt(prompt("Insira a quantidade de produtos atual no estoque."))
let quantidade_max = parseInt(prompt("Insira a quantidade maxima de produtos que podem ocupar o estoque."))
let quantidade_min = parseInt(prompt("Insira quantidade minima necessaria no estoque."))
let quantidade_media = (quantidade_max + quantidade_min)/2

if(estoque_atual >= quantidade_media){
    document.write("Não efetuar compra.")
} else {
    document.write("Efetuar compra")
}

