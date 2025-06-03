//10. Dado um número, verifique se ele é múltiplo de 3 e de 5 ao mesmo tempo.

let num3 = Number (prompt('num3'))
let multiplo = num3 % 3 == 0 && num3 % 5 == 0

console.log(` é multiplo de 3 e de 5? \n ${multiplo}`)