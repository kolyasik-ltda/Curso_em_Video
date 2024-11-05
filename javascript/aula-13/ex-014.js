let pizza = 1;

function comerPizza (){
    console.log(`Comer fatia ${pizza}`);
}

while (pizza <= 6) {
    if (pizza === 6) {
        comerPizza();
        console.log("A pizza acabou");
    } else {
        comerPizza();
    }
    pizza++;
}

