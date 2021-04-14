
function iniciar() {
    
    while (personagem != 1 || personagem != 2 || personagem != 3) {
        var personagem = prompt("Escolha Seu Personagem" + "\n" + "Selecione 1 para  escolher Abgail \nSelecione 2 para escolher electra \nSelecione 3  para escolher Zion")
        if (personagem == 1 || personagem == 2 || personagem == 3) {
            location.assign('cap1.html')
            break
        }
    }
}
function reiniciar(){
    return location.assign('index.html')
    
}
