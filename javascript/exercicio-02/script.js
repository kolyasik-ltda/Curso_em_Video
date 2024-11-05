function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA;
        img.src='img/morning-modified.png'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE;
        img.src='img/evening-modified.png'
    } else {
        // BOA NOITE;
        img.src='img/night-modified.png'
    } 
}