// Um produto custa R$ 200, e está com um desconto de 15%. Calcule o valor final do produto com o desconto aplicado.


let valorproduto = 200
let descontoporcentagem = 15
let porcentagemDecimal = descontoporcentagem / 100
let resultadoDesconto = valorproduto * porcentagemDecimal
let valor_final = valorproduto - resultadoDesconto

console.log(valor_final)

console.log(`Valor final do produto = ${valorproduto - resultadoDesconto}`)

