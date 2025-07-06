/*8. Escreva um programa que calcula a média de uma série de números positivos,parando quando o número zero for encontrado. Exiba a média no final.*/

let media = 0 
let numero = -1
let cont = 0

while (numero !=0) {
    numero = Number (prompt('numero (0 para sair)'))
    media +=numero
    cont++
}

console.log(`Contador: ${cont}`)
console.log(`Media: ${media}`)