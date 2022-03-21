const alunos = [
    {
        nome: 'Maria',
        nota: 1,
        turma: '1A'
    },
    {
        nome: 'João',
        nota: 7,
        turma: '1B'
    },
    {
        nome:'Helena',
        nota: 9,
        turma: '1C'
    },
    {
        nome:'Beatriz',
        nota: 3,
        turma: '1C'
    },
    {
        nome:'Helio',
        nota: 5,
        turma: '1C'
    }
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    
    for (let i=0 ; i < arr.length ; i++) {

        const {nome, nota} = arr[i];

        if(nota >= media) {
            aprovados.push(nome)
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));