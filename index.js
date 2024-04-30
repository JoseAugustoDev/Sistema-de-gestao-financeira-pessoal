let nome_usuario = prompt("Qual seu Nome? ");

const saudacao = document.querySelector(".saudacao");
const saida = document.querySelector(".saida-input");
const saldo = document.querySelector(".saldo-input");
const entrada = document.querySelector(".entrada-input");
const adicionar_saida = document.querySelector(".input-saida");
const adicionar_entrada = document.querySelector(".input-entrada");

saudacao.innerHTML = "Olá, " + nome_usuario + "!";

var aux = 0;
var saldo_atualizado = 0;

adicionar_entrada.addEventListener('click', () => {
    var valor_entrada = parseFloat(prompt("Digite o valor da entrada: "));

    saldo_atualizado += valor_entrada;
    
    entrada.innerHTML = "R$ " + saldo_atualizado + ",00";

})


adicionar_saida.addEventListener('click', () => {
    var valor_saida = parseFloat(prompt("Digite o valor da saida: "));

    saldo_atualizado -= valor_saida;

    aux += valor_saida
    
    saida.innerHTML = "R$ " + aux + ",00";
    saldo.innerHTML = "R$ " + saldo_atualizado + ",00"
    
})
