var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
            event.preventDefault();

            var formAdd = document.querySelector("#form-adiciona");
            if (formAdd.nome.value == "" || formAdd.peso.value == "" ||
                formAdd.altura.value == "" || formAdd.gordura.value == "") {
                alert("Formulário possui um ou mais campos em branco.")
            } else {
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

                nomeTd.textContent = nomeAdd;
                pesoTd.textContent = pesoAdd;
                alturaTd.textContent = alturaAdd;
                gorduraTd.textContent = gorduraAdd;
                imcTd.textContent = calculaImc(peso, altura);

                pacienteLinha.appendChild(nomeTd);
                pacienteLinha.appendChild(pesoTd);
                pacienteLinha.appendChild(alturaTd);
                pacienteLinha.appendChild(gorduraTd);
                pacienteLinha.appendChild(imcTd);

                var tabelaAdd = document.querySelector("#tabela-pacientes");
                tabelaAdd.appendChild(pacienteLinha);


            }
        });