//9. Receba dois números e verifique se pelo menos um deles é negativo.

let num1 = Number (prompt('digite o primeiro numero'))
let num2= Number (prompt('digite o numero 02'))
let negativo = num1 < 0 || num2 < 0

console.log(`eles sao negativos ? \n ${negativo}`)