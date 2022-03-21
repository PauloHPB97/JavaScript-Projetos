let campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener("input", function() {
    console.log(this.value)
    var pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        for (var i = 0; i<pacientes.length ; i++) {
            var paciente = pacientes[i];
            var tdNomed = paciente.querySelector('.info-nome');
            var nome = tdNomed.textContent;
            var expressao = new RegExp(this.value, "i"); // Expressão Regular que pega o valor inserido no campo e "i" = Case Insensitive, não importa se tá em mniúsculo ou maiúsculo.
            console.log(expressao)
            if (!expressao.test(nome)) { // Você quer testar se no nome, vai ter um pedaço o que tem na Expressão Regular
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i=0 ; i<pacientes.length ; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
 
    
})