let palavra = "A diva em Argel alegra-me a vida";
let pal = palavra.split("");
let pa = pal.toString();

let palindromo = pal.reverse();
let palin = palindromo.toString();



// Tirar os espaços e vírgulas
let p = pa.replace(/ /gi, "");
let a = p.replace(/,/gi, "");
let c = a.replace(/-/gi, "");

let lin = palin.replace(/ /gi, "");
let b = lin.replace(/,/gi, "");
let d = b.replace(/-/gi, "");

// Tirando a diferença de Capslock
let x = c.toLowerCase();
let y = d.toLowerCase();

console.log(x);
console.log(y);

//Conferir se a palavra é um palindromo
if (x == y) {
console.log('É um palindromo')
} else {
    console.log('Não é um palindromo')
}

