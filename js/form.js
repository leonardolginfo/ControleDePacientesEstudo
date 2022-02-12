var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();

    var formAdd = document.querySelector("#form-adiciona");

    if (formAdd.nome.value == "" || formAdd.peso.value == "" ||
        formAdd.altura.value == "" || formAdd.gordura.value == "") {
        alert("Formulário possui um ou mais campos em branco.")
    } else {

        //extrair dados do formAdd
        var paciente = pegarDadosFormAdd(formAdd);
        console.log(paciente);

        //montar tr com paciente
        var pacienteLinha = montaTr(paciente)

        var tabelaAdd = document.querySelector("#tabela-pacientes");
        tabelaAdd.appendChild(pacienteLinha);
    }

    function pegarDadosFormAdd(form) {

        var paciente = {
            nome: formAdd.nome.value,
            altura: formAdd.altura.value,
            peso: formAdd.peso.value,
            gordura: formAdd.gordura.value,
            imc: calculaImc(formAdd.peso.value, formAdd.altura.value),
        }
        return paciente;
    }

    function montaTr(paciente) {

        var pacienteLinha = document.createElement("tr");
        pacienteLinha.classList.add("paciente");

        var nomeTd = montaTd(paciente.nome, "info-nome");
        var pesoTd = montaTd(paciente.peso, "info-peso");
        var alturaTd = montaTd(paciente.altura, "info-altura");
        var gorduraTd = montaTd(paciente.gordura, "info-gordura");
        var imcTd = montaTd(paciente.imc, "info-imc");

        nomeTd.textContent = paciente.nome;
        pesoTd.textContent = paciente.peso;
        alturaTd.textContent = paciente.altura;
        gorduraTd.textContent = paciente.gordura;
        imcTd.textContent = paciente.imc;

        pacienteLinha.appendChild(nomeTd);
        pacienteLinha.appendChild(pesoTd);
        pacienteLinha.appendChild(alturaTd);
        pacienteLinha.appendChild(gorduraTd);
        pacienteLinha.appendChild(imcTd);

        return pacienteLinha;

    }

    function montaTd(dado, classe) {
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td
    }
});