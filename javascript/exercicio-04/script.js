function contar(){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let pas = document.getElementById('txtp');
    let res = document.getElementById('res');
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Valor invalido.');
    }else{
        res.innerHTML = "Contando. <br>";
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);
        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            let p = 1
        }
        if (i < f) {
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `;
            }            
        } else {
            // contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `;
            }            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}