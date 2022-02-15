var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();

    var formAdd = document.querySelector("#form-adiciona");



    //extrair dados do formAdd
    var paciente = pegarDadosFormAdd(formAdd);


    //montar tr com paciente
    var pacienteLinha = montaTr(paciente)

    var erros = validaPaciente(paciente);

    console.log(erros);
    if (erros.length > 0) {
        exibirMensagensErro(erros);
        return;
    }

    var tabelaAdd = document.querySelector("#tabela-pacientes");

    tabelaAdd.appendChild(pacienteLinha);

    formAdd.reset();
    var mensagemDeErroNaUl = document.querySelector("#mensagens-erro");
    mensagemDeErroNaUl.innerHTML = "";



    function exibirMensagensErro(erros) {
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        erros.forEach(function (erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });

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

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0)
        erros.push("O nome não pode ser em branco");

    if (!validaPeso(paciente.peso))
        erros.push("Peso Inválido.");

    if (!validaAltura(paciente.altura))
        erros.push("Altura Inválida.");
    if (paciente.peso.length == 0)
        erros.push("Peso não pode ser em branco");

    if (paciente.altura.length == 0)
        erros.push("Altura não pode ser em branco");

    if (paciente.gordura.length == 0)
        erros.push("Gordura não pode ser em branco");

    return erros;
}