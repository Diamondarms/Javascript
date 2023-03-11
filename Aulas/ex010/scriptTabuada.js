function tabuada(){
    var num = document.getElementsByName('num')[0].value
    var sel = document.getElementById('seltab')

    if(num.length == 0) {
        window.alert("Digite um valor")
        return;
    }

    sel.innerHTML = ""

    var num = Number(num);
    var t = 1
    while(t <= 10){
        let item = document.createElement('option')
        item.innerText = `${num} x ${t} = ${num*t}` 
        item.value = `tab${num}`
        sel.appendChild(item)
        t++
    }

    
}