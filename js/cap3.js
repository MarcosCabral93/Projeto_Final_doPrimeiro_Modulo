setTimeout(function cap3() {
    while (escolha1 != 1 || escolha1 != 2) {
        var escolha1 = prompt("Karsius prendeu seus companheiros, você tem que salva-los, \n 1 para lutar o stealth 2 para atacar com tudo")
        if (escolha1 == 1) {
            while (true) {
                var escolha2 = prompt("Você está escondido, Karsius se distraiu. \n 1 para ataca-lo 2 para esperar uma oportunidade melhor ")
                if (escolha2 == 1) {
                    alert("Karsius matou você e seus amigos")
                    location.assign('gameover.html')
                    break
                }
                else if (escolha2 == 2) {
                    alert("Karsios usou um poder do Tempo, Você voltará para o início do capitulo")
                    location.assign('cap3.html')
                    break
                }
                else {
                    alert("Digite um valor Válido")
                    
                }
            }
        }
        else if (escolha1 == 2) {
            while (true) {
                var escolha3 = prompt("Voce está a um passo de vencer Karsius \n escolha 1 para mata-lo ou 2 para banilo")
                if (escolha3 == 1) {
                    alert("Karsios usou um poder do Tempo, Você voltará para o início do capitulo")
                    location.assign('cap3.html')
                    break
                }
                else if (escolha2 == 2) {
                    alert("Voce  salvou seus amigos,venceu Karsius e mostrou seu valor para o conselho. \n Finalmente você alcançará o posto de mago Supremo")
                    document.write('PARABÉNS')
                    break
                }
                else {
                    alert("Digite um valor Válido")
                }
            }
        }
        else {
            alert("Digite Algo válido")
        }
    }
}, 5000)