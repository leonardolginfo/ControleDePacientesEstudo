var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//var paciente = document.getElementById("primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var alturaValida = true;
    var pesoValido = true;

    if (peso <= 0 || peso >= 350) {
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    var imc = peso / (altura * altura);

    if (pesoValido && alturaValida) {

        tdImc.textContent = imc.toFixed(2);
    }
}

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