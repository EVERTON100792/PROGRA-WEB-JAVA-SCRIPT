//8. Escreva um programa que simule uma calculadora simples. O programa deve
//receber dois números e uma operação ( + , - , *, / ). O resultado da operação deve ser exibido.

let num01 = Number(prompt('num1:'))
let operação = prompt('Digite a operação ( + , - , * , / ): ')
let num02 = Number(prompt('num02'))

if (operação === '+') {
    console.log('soma=', num01 + num02)
} else if (operação === ' - ') {
    console.log('subtração=', num01 - num02)
} else if (operação === '*') {
    console.log('Multiplicação=', num01 * num02)
} else if (operação === '/') {
    console.log('Divisão=', num01 / num02)
}

