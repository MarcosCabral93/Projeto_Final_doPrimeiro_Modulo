function capitulo2() {
    while (true) {
        let escolha1 = prompt("A batalha contra kratos começou, \n 1 para uma luta franca ou 2 para a uma luta stealth")
        if (escolha1 == 1) {
            alert("Kratos te deu uma surra e te jogou no HADES")
            location.assign('gameover.html')
            break

        }

        else if (escolha1 == 2) {
            while (true) {
                let escolha2 = prompt("Voce está conseguindo vencer a batalha contra Kratos \n Você tem a chance de mata-lo ou aprisiona-lo \n 1 Para Mata-lo ou 2 para Prende-lo")
                if (escolha2 == 1) {
                    alert("Ao tentar mata-lo, Odin Aparece e mata Você")
                    location.assign('gameover.html')
                    break
                }
                else if (escolha2 == 2) {
                    alert("Voce prendeu Kratos e restabeleu a paz")
                    location.assign('cap3.html')
                    break
                }
                else {
                    alert("comando inválido")
                }
                break
            }
            break

        }
        else {
            alert("comando inválido")
        }
    }
}
document.getElementById('btnCap2').onclick = () => {
    capitulo2();
}


