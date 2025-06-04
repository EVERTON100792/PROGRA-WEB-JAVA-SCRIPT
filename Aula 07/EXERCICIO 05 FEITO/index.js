// 5. crie um programa que leia um ano e informe se ele é bissexto. (um ano é bissexto e for divisivel por 4, mas não por 100, exceto se tambem for divisivel por 400)

let ano = Number(prompt('digite quantos dias tem um ano'))

if (ano % 4 ==0 || ano % 400==0) {
    console.log('ano bissexto')
}
 else if (ano % 100 !==0) {
    console.log('não é um ano bissexto')
}
else {
    console.log('')
}

    

  
 
 
    

