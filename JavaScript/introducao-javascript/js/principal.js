var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutricionista'

let pacientes = document.querySelectorAll('.paciente');

for (let i =0 ; i < pacientes.length ; i++) {
    
    let paciente = pacientes[i]

    let tdPeso = paciente.querySelector('.info-peso');
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector('.info-altura');
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector('.info-imc');

    let pesoValido = true;
    let alturaValida = true;

    if (peso <= 0 || peso >= 300) {
        window.alert('[ERRO] Peso inserido inválido!');
        pesoValido = false;
        tdImc.textContent = '**Peso inválido!'
    }

    if (altura <= 0 || altura >= 3.00) {
        window.alert('[ERRO] Altura inserida inválida!');
        alturaValida = false;
        tdImc.textContent = '**Altura inválida!'
    }

    if (pesoValido && alturaValida) {
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}


