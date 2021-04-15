
setTimeout(function primeiroCapitulo() {
    
    while (true) {//Escolhendo caminho
        var caminho = prompt(" Iniciamos a sua Jornada\n 1 para escolher o desafio do labirinto \n 2 para escolher o Tartaro ");
        if (caminho == 1) {
            while (true) {//Escolha o ca
                var escolha1 = prompt( " Você terá que escolher entre\n 1 para seguir pelo caminho da direita e enfrentar um minotauro ou \n 2 seguir pela esquerda e enfrentar o cerberus")
                if (escolha1 == 1) {//caminho do labirinto
                    while (true) {//Escolha entre lutat ou correr.
                        var escolha2 = prompt(" Você se deparou com o Minotauro. \n 1 para Lutar ou 2 para correr")
                        if (escolha2 == 1) {
                            alert("Você tentou lutar com o Minotauro e perdeu, Tente novamente")
                            location.assign('gameover.html')
                            break
                        }
                         else if (escolha2==2){
                            alert("parabens, Você será redirecionado para o capitulo 2")
                            location.assign('cap2.html')
                            break
                        }
                        else{
                            alert("insira um comando válido")
                        }
                    }
                }
                else {
                    while (escolha3 != 1 || escolha3 != 2) {
                        var escolha3 = prompt("Escolha 1 para Lutar ou 2 para fugir");
                        if (escolha3 == 1) {
                            alert("Você lutou com o cerberus e morreu esquartejada")
                            location.assign('gameover.html')
                            break
                        }
                        else {
                            alert("parabens!! Você  passou para o próximo teste")
                            location.assign('cap2.html')
                            break
                        }
                    }
                }


            }


        }
        else if (caminho == 2) {//Caminho do Tartaro
            while (true) {//Escolha entre lutar ou correr.
                var escolha4 = prompt("No Caminho do Tartaro você enfrentará um Troll decida entre\n 1 para Lutar ou 2 para correr")
                if (escolha4 == 1) {
                    alert("Você Lutou com o Troll e o derrotou \n parabens, voce será redirecionado para o capitulo 2 ")
                    location.assign('cap2.html')
                    break
                }
                else if (escolha4 == 2) {
                    alert("Ao fugir você se machucou, O troll engoliu você")
                    location.assign('gameover.html')
                    break
                }
            }
        }
        else {
            alert("Insira um comando válido")
        }
    }
}, 5000)
primeiroCapitulo();