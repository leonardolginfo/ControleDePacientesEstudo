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
        
        formAdd.reset();

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

        pacienteLinha.appendChild(montaTd(paciente.nome, "info-nome"));
        pacienteLinha.appendChild(montaTd(paciente.peso, "info-peso"));
        pacienteLinha.appendChild(montaTd(paciente.altura, "info-altura"));
        pacienteLinha.appendChild(montaTd(paciente.gordura, "info-gordura"));
        pacienteLinha.appendChild(montaTd(paciente.imc, "info-imc"));

        return pacienteLinha;

    }

    function montaTd(dado, classe) {
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td
    }
});