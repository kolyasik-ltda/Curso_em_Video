function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.getElementById('txtano');
    let res = document.querySelector('div#res');
    if (fAno.value == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fAno.value);
        let genero = '';
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 2) {
                img.setAttribute('src', 'img/baby-any-modified.png');
            } else if (idade >= 2 && idade < 7) {
                img.setAttribute('src','img/toddler-boy-modified.png');
            } else if (idade >= 7 && idade < 12) {
                img.setAttribute('src','img/child-boy-modified.png');
            } else if (idade >= 12 && idade < 18) {
                img.setAttribute('src','img/teen-boy-modified.png');
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src','img/adult-man-modified.png');
            } else {
                img.setAttribute('src','img/elder-man-modified.png');
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 2) {
                img.setAttribute('src', 'img/baby-any-modified.png');
            } else if (idade >= 2 && idade < 7) {
                img.setAttribute('src','img/toddler-girl-modified.png');
            } else if (idade >= 7 && idade < 12) {
                img.setAttribute('src','img/child-girl-modified.png');
            } else if (idade >= 12 && idade < 18) {
                img.setAttribute('src','img/teen-girl-modified.png');
            } else if (idade >= 18 && idade < 60) {
                img.setAttribute('src','img/adult-woman-modified.png');
            } else {
                img.setAttribute('src','img/elder-woman-modified.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`;
        res.appendChild(img);
    }
}