
function iniciar(){
while(true){
var personagem=prompt("Escolha Seu Personagem"+ "\n"+ "Selecione 1 para  escolher Abgail \nSelecione 2 para escolher electra \nSelecione 3  para escolher Zion") 
if(personagem==1){
    window.location.href="file:///C:/Users/paulo/OneDrive/%C3%81rea%20de%20Trabalho/Resilia/projeto_final_modulo/cap1abgail.html"
   break
}
else if( personagem==2){
    window.location.href="file:///C:/Users/paulo/OneDrive/%C3%81rea%20de%20Trabalho/Resilia/projeto_final_modulo/cap1electra.html"
    break
}
else if( personagem==3){

    window.location.href=" file:///C:/Users/paulo/OneDrive/%C3%81rea%20de%20Trabalho/Resilia/projeto_final_modulo/cap1Zion.html"
    break
}
else{
   alert("Insira um comando válido")
}
}
}