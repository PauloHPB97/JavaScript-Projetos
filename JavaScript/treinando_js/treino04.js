function calculaIdade(anos) {
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade!`;
}

const pessoa01 = {
    nome: 'Jade',
    idade: 25,

}

const pessoa02 = {
    nome: 'Gustavo',
    idade: 36,

}

const animal01 = {
    nome: 'Shrek',
    idade: 60,
    raca: 'Ogro'
}

const animal02 = {
    nome: 'Burro',
    idade: 20,
    raca: 'Burro'
}

console.log(calculaIdade.apply(pessoa01, [5]));