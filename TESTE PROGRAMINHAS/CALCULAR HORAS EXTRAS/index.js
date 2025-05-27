//Um funcionário recebe R$1.500,00 por mês e trabalha 220 horas. Ele fez 5 horas extras em dias úteis. 
//Valor da hora normal: R$1.500,00 / 220 = R$6,82. 
//Adicional: R$6,82 x 50% = R$3,41. 
//Valor da hora extra: R$6,82 + R$3,41 = R$10,23. 
//Valor total das horas extras: R$10,23 x 5 = R$51,15. 


let salario_mes=(prompt(`Vamos calcular a sua hora extra, me informe seu salario`))
let valorhora_normal= salario_mes / 220
let horas_extras_emdias_uteis =(prompt('Informe a quantidade de horas extras feitas em dias uteis'))
let Adicional = valorhora_normal * 0.05
let valorhoraextra=valorhora_normal + Adicional
let resultado = valorhoraextra * horas_extras_emdias_uteis

console.log(`VALOR HORAS EXTRAS= R$ ${resultado.toFixed(2)}`)

if (resultado != null) {
    document.write("Voce receberá = " + (resultado.toFixed(2)) + '')

}
