let agora = new Date()
let hora = agora.getHours();
console.log(`Agora são exaatamente ${hora} horas.`)
if ( hora < 12 ) {
    console.log('Bom Dia!')
} else if ( hora < 18 ) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}