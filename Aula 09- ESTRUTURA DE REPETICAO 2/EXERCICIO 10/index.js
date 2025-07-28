/*10. Faça um programa que utilize um laço while para exibir um menu de opções ao usuário (ex: 1 - Olá, 2 - Tchau, 3 - Sair) Use switch para tratar cada opção. O
programa só termina quando o usuário escolher a opção "Sair".*/

let opcao = ""

switch(opcao !==3 ) {
    console.log ('1, ola')
    console.log ('2, tchau')
    console.log('3, sair')
    opcao= Number(prompt('digite a opção:'))
    switch(opcao) {
        case 1:
            console.log('ola')
            break;
        case 2:
            console.log('tchau')
            break;
        case 3:
            console.log('Saindo...')
            break;
        default:
            console.log('opção invalida')
            break;
    }        
}s