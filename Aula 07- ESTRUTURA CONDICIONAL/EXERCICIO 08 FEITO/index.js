//8. Escreva um programa que simule uma calculadora simples. O programa deve
//receber dois números e uma operação ( + , - , *, / ). O resultado da operação deve ser exibido.

let num01 = Number(prompt('vamos calcular digite um numero'))
let operação = prompt('digite a operação que quer fazer (+, -, *, /):')
let num02 = Number(prompt('digite o segundo numero'))

let resultado

if (operação === '+') {
    resultado = num01 + num02;
    console.log('resultado =' + resultado)
} else if (operação === '-') {
    resultado = num01 - num02;
    console.log('resultado=' + resultado)
} else if (operação === '*') {
    resultado = num01 * num02
    console.log('resultado= ' + resultado)

} else if (operação === '/') {
    resultado = num01 / num02;
    console.log('resultado=' + resultado)

} else {
    console.log('operação invalida. use apenas +,-,* ou /')
}  