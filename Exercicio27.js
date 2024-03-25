let numero =parseFloat(prompt("Insira o seu numero"))

switch(numero > 0){
    case " ":
        console.log("O numero é positivo")
        break ;
    case (numero < 0):
        console.log ("O numero é negativo");
        break
    default :
        console.log("O numero é zero");
}