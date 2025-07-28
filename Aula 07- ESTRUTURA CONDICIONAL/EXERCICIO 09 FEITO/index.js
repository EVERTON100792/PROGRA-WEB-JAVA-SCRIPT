//9. Crie um programa que receba três lados de um triângulo e classifique-o como:

//"Equilátero": todos os lados possuem a mesma medida
//"Isósceles": dois lados iguais
//"Escaleno": três lados diferentes

let lado01 = Number(prompt('digite o primeiro lado'))
let lado02 = Number(prompt('digite o segundo lado'))
let lado03 = Number(prompt('digite o tereceiro lado'))

if (lado01 == lado02 && lado02 == lado03) {
    console.log(' o triangulo é equilatero')
} else if (lado01 == lado02 || lado02 == lado03 || lado01 == lado03) {
    console.log('o triandgulo é isósceles')
} else {
    console.log('o triangulo é escaleno')
}


