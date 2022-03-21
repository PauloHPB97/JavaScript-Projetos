const cores = ['red', 'blue', 'green', 'orange', 'yellow', 'white', 'pink', 'gray', 'purple'];

let texto = document.querySelector('.texto');
let botao = document.querySelector('.botao');
let cor = cores[1];
let cor2 = cores[2];

function mudarCor(cor, cor2) {
    document.body.style.backgroundColor = cor
    botao.style.backgroundColor = cor
    texto.textContent = cor;
    texto.style.color = cor2;
    console.log(`Mudou de cor para ${cor}!`);
}

let i = 0;
let j = 1;

function mudarTudo() {
    
    botao.addEventListener('click', function() {
        mudarCor(cor, cor2);
        i++;
        j++;
        cor = cores[i];
        cor2 = cores[j];

        if (i>cores.length-2) {
            return i=-1;
        }

        if(j>cores.length-2) {
            return j=-1;
        }
        
    })
}

mudarTudo();

