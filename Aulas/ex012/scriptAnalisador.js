var num = document.getElementsByName('num')[0]
var sel = document.getElementById('seltab')
var numeros = []


function adicionar(){

    if(num.value.length == 0) {
        window.alert("Digite um valor")
        return;
    }

    var n = Number(num.value)

    if(numeros.indexOf(n) > -1){
        //erro
    }

    numeros.push(n)
    var op = document.createElement('option')
    op.innerText = `Valor ${n} adicionado`
    sel.appendChild(op)

    num.value = "";
}

function finalizar(){

}