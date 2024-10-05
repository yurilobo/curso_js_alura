alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute ;

let tentativas = 1;
//enquanto
while(chute != numeroSecreto){
   
    chute =prompt('Escolha um número entre 1 e 30');
    
    if(numeroSecreto == chute ){
        break;
        
    }else{
       if(chute>numeroSecreto) {
        alert(`O número secreto é maior que ${chute}`);
       }else{
        alert(`O número secreto é maior que o ${chute}`);
       }
       //tentativas = tentativas + 1;
       tentativas++
    }
}
if(tentativas>1){
    alert(`Isso ai!!, Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); 
}else{
    alert(`Isso ai!!, Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`); 

}
