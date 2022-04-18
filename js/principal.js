
function iniciar() {

    while (true) {
        let personagem = prompt("Escolha Seu Personagem" + "\n" + "Selecione 1 para  escolher Abgail \nSelecione 2 para escolher electra \nSelecione 3  para escolher Zion")
        if (personagem == 1) {
            alert("Você iniciará a Jornada de Abgail")

            break
        }
        else if (personagem == 2) {
            alert("Você iniciará a Jornada de Electra ")

            break
        }
        else if (personagem == 3) {
            alert("Você iniciará a Jornada de Zion")

            break
        }
        else {
            alert("entre com um comando válido")
        }
    }
    location.assign('cap1.html')
}



function reiniciar() {
    return location.assign('index.html')

}
document.getElementById('btnMain').onclick = () => {
    iniciar();
  }


