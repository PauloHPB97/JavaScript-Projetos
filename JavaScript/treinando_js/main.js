function teste() {
    let texto01 = window.prompt('Digite o primeiro número!');
    
    let res = document.getElementById('resultado')

    if (texto01.length == 0) {
        window.alert('[ERRO] Digite um número válido!');
    } else {
        let texto02 = window.prompt('Digite o segundo número');

        if (texto02.length == 0) {
            window.alert('[ERRO] Digite um número válido!');
        } else {
            let txt01 = Number(texto01);
            let txt02 = Number(texto02);

            if (txt01 === txt02) {
                res.innerHTML = `O primeiro número que você digitou foi ${texto01} e o segundo foi ${texto02}.<br>
                Os dois números são iguais!!!<br>`

                let soma = txt01 + txt02;

                if (soma <= 10) {
                    res.innerHTML += `A soma deles é ${soma} e é menor ou igual à 10!`
                } else if (soma > 10 && soma < 20) {
                    res.innerHTML += `A soma deles é ${soma} e está entre 10 e 20!`
                } else if (soma >= 20) {
                    res.innerHTML += `A soma deles é ${soma} e é maior ou igual à 20!`
                } else {
                    res.innerHTML += `[ERRO] Houve algum erro!`
                }
            } else {
                res.innerHTML = `O primeiro número que você digitou foi ${texto01} e o segundo foi ${texto02}.<br>
                Os dois números NÃO são iguais!!!<br>`

                let soma = txt01 + txt02;

                if (soma <= 10) {
                    res.innerHTML += `A soma deles é ${soma} e é menor ou igual à 10!`
                } else if (soma > 10 && soma < 20) {
                    res.innerHTML += `A soma deles é ${soma} e está entre 10 e 20!`
                } else if (soma >= 20) {
                    res.innerHTML += `A soma deles é ${soma} e é maior ou igual à 20!`
                } else {
                    res.innerHTML += `[ERRO] Houve algum erro!`
                }
            }
        }
    }

    

    
}