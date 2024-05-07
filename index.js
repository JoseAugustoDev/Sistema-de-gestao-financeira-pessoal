let nome_usuario = prompt("Qual seu Nome? ");

const saudacao = document.querySelector(".saudacao");
const field_saida = document.querySelector(".saida-input");
const field_saldo = document.querySelector(".saldo-input");
const field_entrada = document.querySelector(".entrada-input");
const adicionar_saida = document.querySelector(".input-saida");
const adicionar_entrada = document.querySelector(".input-entrada");

const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");

openModalButton.addEventListener("click", () => {
    modal.style = "display: flex;";
});

closeModalButton.addEventListener("click", () => {
    modal.style = "display: none;";
});

saudacao.innerHTML = "Olá, " + nome_usuario + "!";

var aux = 0;

const modal_saida = document.querySelector(".modal-saida");
const openModalButton_saida = document.querySelector(".open-modal-saida");
const closeModalButton_saida = document.querySelector(".close-modal-saida");

openModalButton_saida.addEventListener("click", () => {
    modal_saida.style = "display: flex;";
});

closeModalButton_saida.addEventListener("click", () => {
    modal_saida.style = "display: none;";
});

class Conta {
    constructor(nome, entrada, saida, saldo) {
        this.nome = nome;
        this.entrada = entrada;
        this.saida = saida;
        this.saldo = saldo;
        
        this.adicionarEntrada = function () {
            const valor_entrada = parseFloat(document.querySelector('#valor-entrada').value);
            
            this.entrada += valor_entrada;
            
            modal.style = "display: none;"
            
            field_entrada.innerHTML = "R$ " + this.entrada + ",00";
            
            return this.entrada;
        }

        this.adicionarSaida = function () {
            var valor_saida = parseFloat(document.querySelector('#valor-saida').value);
            
            aux += valor_saida
            
            this.saida += valor_saida;
            
            modal_saida.style = "display: none;"
            
            field_saida.innerHTML = "R$ " + this.saida + ",00";
            
            return aux;
        }

        this.mostrarSaldo = function () {
            
            aux += this.saida;
            
            this.saldo = this.entrada - this.saida;
            
            field_saldo.innerHTML = "R$ " + this.saldo + ",00";
            
            return this.saldo;
        }
    }

}

let item = {};
let itens = [];

function pegarValores(flag) {
    
    var item_valor = 0;
    var item_desc = "";
    var item_data = new Date();
    var item_tag = "";
    
    if (flag == 0) {
        item_desc = document.querySelector("#descricao-entrada").value; 
        item_valor = document.querySelector("#valor-entrada").value;
        item_data = document.querySelector("#data").value;
        item_tag = document.querySelector("#tags").value;
    } else {
        item_desc = document.querySelector("#descricao-saida").value; 
        item_valor = document.querySelector("#valor-saida").value;
        item_data = document.querySelector(".data-saida").value;
        item_tag = document.querySelector(".tags-saida").value;
    }

    
    item = {
        itemDescricao: item_desc,
        itemValor: item_valor,
        itemData: item_data,
        itemTag: item_tag
    }

    itens.unshift(item);

    return mostrarTabela(itens);
}

function mostrarTabela(itens) {
    
    let tabela = document.querySelector(".tabela-itens");
    let corpo_itens = document.querySelector(".corpo-itens");
    
    itens.map(item => {

        var linha = document.createElement("tr");

        for (let i = 0; i < 4; i++) {
            var cell = document.createElement("td");

            if (i == 0) {
                cell.textContent = item.itemDescricao;
            } else if (i == 1) {
                cell.textContent = item.itemValor;
            } else if (i == 2) {
                cell.textContent = item.itemData;
            } else if (i == 3) {
                cell.textContent = item.itemTag;
            }

            linha.appendChild(cell);
        }

        corpo_itens.appendChild(linha);

        console.log(item.itemDescricao);
        console.log(item.itemValor);
        console.log(item.itemData);
        console.log(item.itemTag);
    })

    tabela.appendChild(corpo_itens);

    itens.pop();

}


const pessoa = new Conta(nome_usuario, 0, 0, 0);

adicionar_entrada.addEventListener("click", () => {
    pessoa.adicionarEntrada();
    pessoa.mostrarSaldo();
})

adicionar_saida.addEventListener("click", () => {
    pessoa.adicionarSaida();
    pessoa.mostrarSaldo();
})
