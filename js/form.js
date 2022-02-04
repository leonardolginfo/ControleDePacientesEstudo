
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Oi eu sou o botao e fui clicado");

    var formAdd = document.querySelector("#form-adiciona");

    var nomeAdd = formAdd.nome.value;
    var pesoAdd = formAdd.peso.value;
    var alturaAdd = formAdd.altura.value;
    var gorduraAdd = formAdd.gordura.value;

    var pacienteLinha = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nomeAdd.toUpperCase();
    pesoTd.textContent = pesoAdd;
    alturaTd.textContent = alturaAdd;
    gorduraTd.textContent = gorduraAdd;

    pacienteLinha.appendChild(nomeTd);
    pacienteLinha.appendChild(pesoTd);
    pacienteLinha.appendChild(alturaTd);
    pacienteLinha.appendChild(gorduraTd);

    var tabelaAdd = document.querySelector("#tabela-pacientes");
    tabelaAdd.appendChild(pacienteLinha);


});