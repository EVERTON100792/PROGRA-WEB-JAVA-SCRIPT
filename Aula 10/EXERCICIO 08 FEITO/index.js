/* 8. Crie uma função chamada classificarIMC que receba o IMC e retorne a
classificação:
Abaixo do peso: IMC < 18.5
Peso normal: 18.5 <= IMC < 25
Sobrepeso: 25 <= IMC < 30
Obesidade: IMC >= 30 */

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "abaixo do peso"
    }
    if (imc < 18.5 ) {
        return "peso normal" 
    }   
    if (imc < 25 ) {
        return "sobrepeso"
    }
    if (imc < 30) {
        return "obesidade"
    }
}

console.log(classificarIMC (imc))