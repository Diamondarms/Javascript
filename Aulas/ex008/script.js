var agora = new Date();
var hora = agora.getHours().toFixed(0)

var horario = document.getElementById('horario')
if(hora>1){
    horario.innerText = `Agora são ${hora} horas`
}else{
    horario.innerText = `Agora é ${hora} hora`
}
var img = document.getElementById('imagem');
if (hora < 3 || hora > 18){
    document.body.style.backgroundColor = 'rgb(19, 17, 15)';
    img.src = "imagens/noite.jpg"
} else if (hora <= 12){
    document.body.style.backgroundColor = 'rgb(110, 137, 187)';
    img.src = "imagens/manha.jpg"
} else{
    document.body.style.backgroundColor = 'rgb(165, 163, 68)';
    img.src = "imagens/tarde.jpg"
}