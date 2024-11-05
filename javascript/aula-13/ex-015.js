let cocaCola = parseFloat(2.0);

function beberCoca (){
    console.log("Bebi um copo de 100ml");
    console.log(`Ainda restam ${cocaCola.toFixed(1)} litros de Coca-Cola.`);
}

do {
    if (cocaCola >= 0.1) {
        beberCoca();
    } else {
        console.log('Bebi o último copo.');
        console.log('A Coca-Cola acabou.');
    }
    cocaCola = parseFloat((cocaCola - 0.1).toFixed(1));
} while (cocaCola >= 0.0);