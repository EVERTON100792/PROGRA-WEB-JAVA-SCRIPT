/*2. Escreva uma função em JavaScript que verifique se um número é par ou ímpar.*/

/**
 * Imprimo no console se um numero é par ou impar 
 * @param {number} numero - numero que será verificado
 * @exemple
 * // imprime o numero 4 é par
 * parOUimpar(4)
*/
function parOuimpar(numero) {
    if (numero % 2 ===0) {
        console.log(`O numero ${numero} é par`)
    } else {
        console.log(`O Numero ${numero} é impar`)
    }
}

parOuimpar(4)
parOuimpar(5)


