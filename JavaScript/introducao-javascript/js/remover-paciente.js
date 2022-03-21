var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event) {
    event.target.parentNode.classList.add("fadeOut"); // Fazer desaparecer lentamente

    /*
    // O double click será em um td, mas que será removido será o pai dele, ou seja, o tr
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode; // pegar o pai do alvo (TR)

    paiDoAlvo.remove();
    */

    // Essa função fará que de um delay (em milisegundos) em uma ação, que será de remoção do paciente
    setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
})
