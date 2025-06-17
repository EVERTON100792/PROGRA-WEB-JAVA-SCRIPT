//3. Implementar um programa que imprima todos os números ímpares entre 1 e 50.

for (let i = 1; i <=50; i += 2) { // primeira forma 
    console.log(i);
}


for (let i = 1; i <=50; i ++) { // correção professor
    if (i % 2 == 1) {
        console.log(i);
    }
}