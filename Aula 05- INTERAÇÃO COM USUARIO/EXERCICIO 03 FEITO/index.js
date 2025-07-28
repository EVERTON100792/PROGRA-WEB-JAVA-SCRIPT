//3. Solicite três notas e calcule a média aritmética delas.

let nota01= Number (prompt('Digite a primeira nota'))
let nota02= Number (prompt ('Digite a segunda nota'))
let nota03= Number (prompt ('Digite a terceira nota'))
let media = (nota01+nota02+nota03) / 3


console.log(`Media aritimetica= ${(nota01 + nota02 + nota03) / 3}`) //1 forma

console.log('Media das notas:', media.toFixed(2))  //2 forma  

alert(`media das notas: ${media.toFixed(2)}`) // Com esse comando aparede o resultado no proprio pront

