var pacientes = document.querySelectorAll('.paciente');

for (let i = 0 ; i < pacientes.length ; i++) {

    let paciente = pacientes[i]

    let tdPeso = paciente.querySelector('.info-peso');
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector('.info-altura');
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector('.info-imc');

    let pesoValido = validaPeso(peso); // true or false
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log('[ERRO] Peso inválido!');
        pesoValido = false;
        tdImc.textContent = '**Peso inválido!'
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaValida) {
        console.log('[ERRO] Altura inválida!');
        alturaValida = false;
        tdImc.textContent = '**Altura inválida!'
        paciente.classList.add("paciente-invalido")
    }

    if (pesoValido && alturaValida) {
        let imc = calcularImc(peso, altura)
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso <= 300) {
        return true;
    } else {
        return false

    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

function calcularImc(peso, altura) {
    let imc =0;
    
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}