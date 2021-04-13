setTimeout(function primeiroCapitulo() {
    while (caminho != 1 || caminho != 2) {
        var caminho = prompt("1 para escolher o desafio do labirinto \n 2 para escolher a masmorra ");
        if (caminho == 1) {
            while (escolha1 != 1 || escolha1 != 2) {
                var escolha1 = prompt("1 para seguir pelo caminho da direita e enfrentar um minotauro ou \n 2 seguir pela esquerda e enfrentar o cerberus")
                if (escolha1 == 1) {
                    while (escolha2 != 1 || escolha2 != 2) {
                        var escolha2 = prompt("1 para Lutar ou 2 para correr")
                        if (escolha2 == 1) {
                            alert("Você tentou lutar com o Minotauro e perdeu, Tente novamente")
                        }
                        else {
                            alert("parabens, voce será redirecionado para o capitulo 2")
                            location.assign('cap2abgail.html')
                        }
                    }
                }
                else {
                    while (escolha3 != 1 || escolha3 != 2) {
                        var escolha3 = prompt("Escolha 1 para Lutar ou 2 para fugir");
                        if (escolha3 == 1) {
                            alert("Voce lutou com o cerberus e perdeu")
                        }
                        else {
                            alert("parabens Voce passou de fase")
                        }
                    }
                }


            }


        }
        else if (caminho == 2) {
            document.write('Vamos pelo Tártaro')
            break
        }
        else if (caminho == 3) {

            document.write("fff")
            break
        }
        else {
            alert("Insira um comando válido")
        }
    }
}, 500)
primeiroCapitulo();