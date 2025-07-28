// 6. Implementar um programa que, dados dois valores de entrada informados pelo
// usuário, troque os valores entre as variáveis iniciais.

let entrada01 = prompt()
let entrada02= prompt()

let aux = entrada01
entrada01= entrada02
entrada02= aux

console.log('entra01', entrada01)
console.log('entra02', entrada02)