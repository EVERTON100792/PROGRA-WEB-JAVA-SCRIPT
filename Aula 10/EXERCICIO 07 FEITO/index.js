/*7. Implementar uma função que calcule o Índice de Massa Corpórea(IMC), dados o
peso e a altura informados pelo usuário.
Fórmula do IMC: peso / altura * altura */

function IMC(peso, altura) {
    return peso / (altura * altura)
}


let peso= Number (prompt ('DIgite o peso'))
let altura= Number(prompt('Digite a altura'))
console.log(IMC (peso, altura));

