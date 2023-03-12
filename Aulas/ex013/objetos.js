var Computador = {
    marca: 'acer',
    ligado: false,
    horarioAtual(){
        var d = new Date()
        var agora = d.getHours()
        return agora
    },
    ligar() {
        ligado = true
    },
    desligar(){
        ligado = false
    }
}
Computador.marca = 'Asus'
console.log(Computador.marca)
console.log(Computador.horarioAtual())