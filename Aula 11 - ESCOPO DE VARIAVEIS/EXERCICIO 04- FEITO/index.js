/*4. Identifique o escopo das variáveis e a saída no código abaixo:

if (true) {
var a = 1;
let b = 2;
const c = 3;
}
console.log(a); // ?
console.log(b); // ?
console.log(c); // ?

*/

console.log(a); // 1, ESCOPO GLOBAL
console.log(b); // VARIAVEL NAO EXISTENTE, ESCOPO É DE BLOCO
console.log(c); // VAIRAVEL NAO EXISTE, ESCOPO É DE BLOCO