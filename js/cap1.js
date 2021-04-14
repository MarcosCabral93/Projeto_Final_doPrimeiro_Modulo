
setTimeout(function primeiroCapitulo() {
    
    while (caminho != 1 || caminho != 2) {//Escolhendo caminho
        var caminho = prompt(" Iniciamos a sua Jornada\n 1 para escolher o desafio do labirinto \n 2 para escolher o Tartaro ");
        if (caminho == 1) {
            while (escolha1 != 1 || escolha1 != 2) {//Escolha o ca
                var escolha1 = prompt( " Você terá que escolher entre\n 1 para seguir pelo caminho da direita e enfrentar um minotauro ou \n 2 seguir pela esquerda e enfrentar o cerberus")
                if (escolha1 == 1) {//caminho do labirinto
                    while (escolha2 != 1 || escolha2 != 2) {//Escolha entre lutat ou correr.
                        var escolha2 = prompt(" Você se deparou com o Minotauro. \n 1 para Lutar ou 2 para correr")
                        if (escolha2 == 1) {
                            alert("Você tentou lutar com o Minotauro e perdeu, Tente novamente")
                            location.assign('gameover.html')
                        }
                         else {
                            alert("parabens, Você será redirecionado para o capitulo 2")
                            location.assign('cap2.html')
                        }
                    }
                }
                else {
                    while (escolha3 != 1 || escolha3 != 2) {
                        var escolha3 = prompt("Escolha 1 para Lutar ou 2 para fugir");
                        if (escolha3 == 1) {
                            alert("Você lutou com o cerberus e morreu esquartejada")
                            location.assign('gameover.html')
                        }
                        else {
                            alert("parabens!! Você  passou para o próximo teste")
                            location.assign('cap2.html')
                        }
                    }
                }


            }


        }
        else if (caminho == 2) {//Caminho do Tartaro
            while (escolha4 != 1 || escolha4 != 2) {//Escolha entre lutar ou correr.
                var escolha4 = prompt("No Caminho do Tartaro você enfrentará um Troll decida entre\n 1 para Lutar ou 2 para correr")
                if (escolha4 == 1) {
                    alert("Você Lutou com o Troll e o derrotou \n parabens, voce será redirecionado para o capitulo 2 ")
                    location.assign('cap2.html')
                }
                else if (escolha4 == 2) {
                    alert("Ao fugir você se machucou, O troll engoliu você")
                    location.assign('gameover.html')
                }
            }
        }
        else {
            alert("Insira um comando válido")
        }
    }
}, 10000)
primeiroCapitulo();