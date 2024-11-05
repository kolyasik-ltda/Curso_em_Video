let num = [5, 8, 2, 9, 3]
let lnum = num.length
let c = 1
let a = 0
console.log(`\n---------------------------------------- \n|DEMONSTRAÇÃO DE COMO FUNCIONA UM ARRAY| \n----------------------------------------`)
console.log(`A lista tem ${lnum} posições.`)
console.log(`A lista em ordem crescente. ${num.sort()}`)
console.log(`Sera adicionado o numero 1 no final, usando metodo num.push().`)
num.push(1)
console.log(`Sera mostrada a posição do numero 1 na lista usando num.indexOf(1).`)
console.log(`E a posição de 1 na lista é ${num.indexOf(1)}`)
console.log(`Quando indexOf() não encontra o valor na lista ele retorna -1. \n`)
while (c <= num.length) {
    console.log(`A posição ${c} da lista tem o valor ${num[a]}`)
    c++
    a++
}