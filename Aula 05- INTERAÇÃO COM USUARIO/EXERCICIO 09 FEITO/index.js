//9. Implementar um programa que, dada uma quantidade de litros de abastecimento
//e o preço em reais do combustível informados pelo usuário, calcule e apresente o
//valor total do abastecimento. Formate a saída para que seja apresentada com duas
//casas decimais.

let litros = (prompt('Vamos calcular o valor total de abastecimeto, insira a quantidade abastecida'))
let preço= (prompt('Otimo!!! estamos quase la, agora o preço atual do combustivel'))

console.log(`O valor total abastecido foi de = R$ ${(litros * preço).toFixed(2)} `)