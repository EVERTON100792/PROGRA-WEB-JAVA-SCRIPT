//7. Solicite uma distância em quilômetros e converta para metros e centímetros.

let distancia_em_km = (prompt('Insira uma distancia em KM para convertermos em metros e centimetros'))

let metros= distancia_em_km * 1000
let centimetros = distancia_em_km * 100000

console.log(`Km convertido em metros = ${metros}`)
console.log(`Km convertido em centimetros = ${centimetros}`)

