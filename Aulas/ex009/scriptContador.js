function contar(){
    let inicio = Number(document.getElementsByName('inicio')[0].value)
    let fim = Number(document.getElementsByName('fim')[0].value)
    let passo = Number(document.getElementsByName('passo')[0].value)
    let res = document.getElementById('res')
    
    if(passo <= 0 || inicio == fim) {
        res.innerText = 'Impossível contar'
        return;
    }

    let fString = ""
    if(inicio < fim){
        for(var x=inicio; x < fim; x+=passo){
            fString += x+' \u{1F449} ';
        } 
    } else {
        for(var x=inicio; x > fim; x-=passo){
            fString += x+' \u{1F449} ';
        } 
    }
    fString += fim;

    res.innerHTML = 'Contando: <br>' + fString
}