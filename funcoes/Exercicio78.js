let nomes = []

function names(){
   for(let i = 0 ; i < 3 ; i++)
   nomes.push(prompt("Insira os nomes"))
}

names()

let proc = prompt("insira o nome que deseja procurar")

    nomes.map(function( nomes){
    if(nomes == proc){
        console.log("Achei " , proc)
    } else {
        console.log("Não achei " , proc)
    }

    })
