alert('Boas vindas ao nosso site');
let nome = 'lua';
let idade = 25;
let numeroDeVendas = 50
let saldoDisponivel = 1000
alert('Erro! Preencha todos os campos');
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);
nome =prompt('Diga seu nome')

idade =prompt('Diga sua idade')

if(idade >= 18){
    console.log('Pode tirar a habilitação!'); 
}else{
    console.log('Pode não tirar a habilitação!');
}