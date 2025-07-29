/*1. Escreva uma função em JavaScript que calcule a área de um triângulo.*/


/**
 * Calcula a area do trianfolo
 * @param {number} base - medida da base do triangulo
 * @param {number} altura - medida da altura do triangulo
 * @returns {number} - a area do triangulo
 * @example
 * // Retorno o numero 6
 * areaDotriangulo (3,4)
*/


function areaDotriangulo(base,altura) {
    return (base*altura) / 2
}

console.log(`Area do triangulo é: ${areaDotriangulo(3,4)}`);