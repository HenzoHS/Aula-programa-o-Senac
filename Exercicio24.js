let salario_fix = parseFloat(prompt("Insira seu salário"))
let valor_vend = parseFloat(prompt("Insira valor de vendas"))
let comissao1 = valor_vend * (3/100)
let comiisao2 = valor_vend * (5/100)

if(valor_vend > 1500){
    console.log(salario_fix + comiisao2)
} else {
    console.log(salario_fix + comissao1)
}