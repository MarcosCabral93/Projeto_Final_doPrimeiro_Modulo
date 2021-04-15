
function iniciar() {
    
    while (personagem != 1 || personagem != 2 || personagem != 3) {
        var personagem = prompt("Escolha Seu Personagem" + "\n" + "Selecione 1 para  escolher Abgail \nSelecione 2 para escolher electra \nSelecione 3  para escolher Zion")
        if (personagem == 1) {
            alert("Você iniciará a Jornada de Abgail")
            location.assign('cap1.html')
            break
        }
        else if(personagem==2){
            alert("Você iniciará a Jornada de Electra ")
            location.assign('cap1.html')
            break
        }
        else if(personagem==3){
            alert("Você iniciará a Jornada de Zion")
            location.assign('cap1.html')
            break
        }
        else{
        alert("entre com um comando válido")
        }
    }
}
function reiniciar(){
    return location.assign('index.html')
    
}
