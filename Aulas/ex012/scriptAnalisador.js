var num = document.getElementsByName('num')[0]
var sel = document.getElementById('seltab')
var res = document.getElementById('res')
var numeros = []

function adicionar(){

    if(num.value.length == 0) {
        window.alert("Digite um valor")
        num.focus()
        return;
    }

    var n = Number(num.value)

    if(numeros.indexOf(n) > -1){
        window.alert("Valor já existente")
        num.value = "";
        num.focus()
        return;
    } else if (n > 100 || n < 1){
        window.alert("número fora dos limites")
        num.value = "";
        num.focus()
        return;
    }

    numeros.push(n)
    var op = document.createElement('option')
    op.innerText = `Valor ${n} adicionado`
    sel.appendChild(op)

    res.innerHTML = ""
    num.value = "";
    num.focus()
}

function finalizar(){
    if(numeros.length == 0){
        window.alert("Adicione valores")
        num.focus()
        return;
    }

    res.innerHTML = ""

    var sortedNumeros = numeros.sort(function(a, b){return a-b})
    var soma=0
    for(var c in numeros){
        soma+=numeros[c]
    }

    criarDiv(`Ao todo, temos ${numeros.length} números cadastrados.`)
    criarDiv(`O maior valor informado foi ${sortedNumeros[numeros.length-1]}.`)
    criarDiv(`O menor valor informado foi ${sortedNumeros[0]}.`)
    criarDiv(`Somando todos os valores, temos ${soma}.`)
    criarDiv(`A média dos valores digitados é ${(soma/numeros.length).toFixed(2)}.`)
}

function criarDiv(text){
    var p = document.createElement('p')
    p.innerText = text;
    res.appendChild(p)
}