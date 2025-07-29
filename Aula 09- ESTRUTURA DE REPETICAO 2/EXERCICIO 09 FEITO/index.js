/* 9. Implementar um programa que some todos os números informados pelo usuário até que seja digitada a palavra “Fim”.*/

let soma = 0
let numero = 0

while (numero !== 'Fim') {
    numero =prompt ('digite um numero e (fim para sair):')

    if (numero !== 'Fim') {
        soma += Number (numero)
    }
}

console.log (`Somatoria: ${soma}`)
