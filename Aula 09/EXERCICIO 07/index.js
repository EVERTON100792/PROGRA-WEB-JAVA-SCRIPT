/*7. Escreva um programa que simula um sistema de login. O usuário tem até 3 tentativas para acertar a senha correta. Se errar 3 vezes, o acesso é negado.*/

let tentativas = 1
let senhacorreta = 2535
let senha = prompt('digite a senha')



while (tentativas < 3 && senha!= senhacorreta) {
    senha = prompt ('digite a senha')
    tentativas++
}

console.log ('tentivas', tentativas)
if (senha== senhacorreta) {
    console.log ('Voce acertou!!!')
} else {
    console.log('Acesso negado')
}