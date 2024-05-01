let nome_usuario = prompt("Qual seu Nome? ");

const saudacao = document.querySelector(".saudacao");
const saida = document.querySelector(".saida-input");
const saldo = document.querySelector(".saldo-input");
const entrada = document.querySelector(".entrada-input");
const adicionar_saida = document.querySelector(".input-saida");
const adicionar_entrada = document.querySelector(".input-entrada");

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");

openModalButton.addEventListener("click", () => {
    modal.style = "display: flex;"
});

closeModalButton.addEventListener("click", () => {
    modal.style = "display: none;"
});

saudacao.innerHTML = "Olá, " + nome_usuario + "!";

var aux = 0;
var saldo_atualizado = 0;

adicionar_entrada.addEventListener('click', () => {
    const valor_entrada = parseFloat(document.querySelector('#valor-entrada').value);

    saldo_atualizado += valor_entrada;
    
    entrada.innerHTML = "R$ " + saldo_atualizado + ",00";

})

const modal_saida = document.querySelector(".modal-saida");
const openModalButton_saida = document.querySelector(".open-modal-saida");
const closeModalButton_saida = document.querySelector(".close-modal-saida");

openModalButton_saida.addEventListener("click", () => {
    modal_saida.style = "display: flex;"
});

closeModalButton_saida.addEventListener("click", () => {
    modal_saida.style = "display: none;"
});

adicionar_saida.addEventListener('click', () => {
    var valor_saida = parseFloat(document.querySelector('#valor-saida').value);

    saldo_atualizado -= valor_saida;

    aux += valor_saida
    
    saida.innerHTML = "R$ " + aux + ",00";
    saldo.innerHTML = "R$ " + saldo_atualizado + ",00"
    
})
