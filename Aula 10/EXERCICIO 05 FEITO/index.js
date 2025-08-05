/*Escreva uma função chamada converterCelsiusParaFahrenheit que converta
temperatura de Celsius para Fahrenheit. Fórmula: F= (C * 9/5) + 32*/

/**
 * Função que converte graus celsius em graus fahrenheit
 * @param {number} celsius- temperatura em graus celsius
 * @returns {number} - retorne a temperatura em fahrenheit
 */
function converterCelsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32
}

console.log(converterCelsiusParaFahrenheit(10))