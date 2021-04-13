setTimeout( function primeiroCaminho(){
    while(true){
    var caminho=prompt("1 para escolher o desafio do labirinto \n 2 para escolher a masmorra \n 3 para o hades") 
    if(caminho==1){
        document.write('ddddo')
        break
    }
    else if( caminho==2){
        document.write('Vamos pelo Tártaro')
        break
    }
    else if( caminho==3){
    
        document.write("fff")
        break
    }
    else{
       alert("Insira um comando válido")
    }
    }
}, 500)
primeiroCaminho();