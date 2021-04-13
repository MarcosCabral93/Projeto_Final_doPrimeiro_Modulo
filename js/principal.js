
function iniciar(){
while(true){
var personagem=prompt("Escolha Seu Personagem"+ "\n"+ "Selecione 1 para  escolher Abgail \nSelecione 2 para escolher electra \nSelecione 3  para escolher Zion") 
if(personagem==1){
    location.assign('cap1abgail.html')
   break
   //
}
else if( personagem==2){
    location.assign('cap1electra.html')
    break
}
else if( personagem==3){

    location.assign('cap1Zion.html')
}
else{
   alert("Insira um comando válido")
}
}
}