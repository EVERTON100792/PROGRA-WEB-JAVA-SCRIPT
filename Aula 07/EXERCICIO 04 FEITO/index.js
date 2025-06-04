// 4 crie um programa que leia a temperatura em graus celsius e informe se esta frio, abaixo de 18 graus, agradavel entre 18 e 26 ou quente acima de 26

let temperatura= Number(prompt('informe a temperatura'))

if (temperatura < 18) {
    console.log('está frio')
}
else if (temperatura >=18 && temperatura <=26 ) {
    console.log('a temperatura esta agradável')
}
else {
    console.log('o tempo esta quente')
}