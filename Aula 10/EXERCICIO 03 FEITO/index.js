/*3. Escreva uma função chamada ehPrimo que receba um número inteiro positivo e
retorne true se for um número primo, e false caso contrário.*/


/**
 * Verifica se o numero é primo 
 * @param {number} numero- numero que sera verifica se é primo 
 * @returns {boolean} retorna true se o numero é primo, ou false caso nao seja
 */

function ehPrimo(numero) {
    if (numero <=1) {
        return false
    }
    
    for(let i = 2; i < numero; i ++) {
        if (numero % i === 0)
            return false
    }

    return true
}

for (let i = 0; i < 20; i ++) {
    console.log(` O numero ${i} é primo ${ehPrimo(i)}`)
}

    
