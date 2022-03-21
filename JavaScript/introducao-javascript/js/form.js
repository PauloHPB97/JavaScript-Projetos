let botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event) {

    event.preventDefault(); // Não deixar a página recarregar automaticamente

    // Pegar o formulário inteiro
    let form = document.querySelector('#form-adiciona');

    // Extraindo informações do paciente do form
    let paciente = obtemPacienteDoForm(form);

    let erros = validaPaciente(paciente);
    console.log(erros)

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return; // Se o paciente dor inválido, então essa condição será true e vai acionar o método return (vazio) que irá finalizar a função e não acionará os comandos a seguir.
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); // Limpar o formulário

    // Limpar as mensagens de erro quando acertar
    let mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente) {
    // Cria a Tr e a Td dos pacientes
    let pacienteTr = montaTr(paciente);

    // Pegar a tabela inteira para poder acrescentar o novo paciente (tr)
    let tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr) // Colocar o paciente novo na tabela

}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

// Pegar todos os valores (value) de cada item (nome, peso, altura e gordura) que foram inseridos
function obtemPacienteDoForm (form) {
    
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
     return paciente;
}

function montaTr(paciente) {
    // Adicionar/Criar um paciente novo (é tr porque cada paciente é um tr)
    let pacienteTr = document.createElement('tr');

    // Adicionando a classe
    pacienteTr.classList.add("paciente");
    
    // Adicionando cada um dos elementos dentro da tag tr
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

// Adicionar/Criar todos os itens para colocar em cada paciente (São apenas elementos distintos)
function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

   return td;
}

function validaPaciente(paciente) {

    let erros = [];

    
    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido!");
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida!");
    
    if (paciente.nome.length == 0) {
        erros.push("[ERRO] O nome não pode ser em branco!")
    }

    if (paciente.peso.length == 0) {
        erros.push("[ERRO] O peso não pode ser em branco!");
    }

    if (paciente.altura.length == 0) {
        erros.push("[ERRO] A altura não pode ser em branco!")
    }

    if (paciente.gordura.length == 0) {
        erros.push("[ERRO] A gordura não pode ser em branco!")
    }
    return erros;
}