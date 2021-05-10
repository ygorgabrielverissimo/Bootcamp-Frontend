

let alunos = [
    {
        nome: 'Maria Joao',
        cor: 'Branco',
        tamanho: 'P'
    },
    {
        nome: 'Maria Jose',
        cor: 'Branco',
        tamanho: 'P'
    },
    {
        nome: 'Maria Abraao',
        cor: 'Branco',
        tamanho: 'P'
    },
    {
        nome: 'Marcio Guess ',
        cor: 'Vermelho',
        tamanho: 'P'
    },
    {
        nome: 'Ygor Verissimo',
        cor: 'Vermelho',
        tamanho: 'G'
    },
    {
        nome: 'Isaac Verissimo',
        cor: 'Branco',
        tamanho: 'M'
    },
    {
        nome: 'Isaac Gabriel',
        cor: 'Branco',
        tamanho: 'G'
    }
]

function formatPrint(format) {
    
    format.forEach((element) => {
        console.log(`${element.cor} ${element.tamanho} ${element.nome}`)
    });
    
}

function nomeAscedendent(orderByTamanho) {
    let orderByNome;
    orderByNome = orderByTamanho.sort((a, b) => {
        if (a.cor === b.cor && a.tamanho === b.tamanho) {
            return a.nome > b.nome ? 1 : a.nome < b.nome ? -1 : 0
        }
    })

   formatPrint(orderByNome)
}

function tamanhodescendent(orderByCor) {
    let orderByTamanho;

    orderByTamanho = orderByCor.sort((a, b) => {
        if (a.cor === b.cor) {
            return a.tamanho > b.tamanho ? -1 : a.tamanho < b.tamanho ? 1 : 0
        }

    })

    nomeAscedendent(orderByTamanho)

}

function corAscendent(alunos) {

    let orderByCor;
    orderByCor = alunos.sort((a, b) => {
        return a.cor > b.cor ? 1 : a.cor < b.cor ? -1 : 0
    })

    tamanhodescendent(orderByCor)

};

try {

    corAscendent(alunos)

} catch (error) {

}


/*

const nUniformes = parseInt(gets()); //para uso na DIO
let alunos = [];

while (true) {
   let nome = gets(); //para uso na DIO
  if (parseInt(nome) === 0) break;

   let [cor, tamanho] = gets().split(' '); //para uso na DIO
 

  alunos = [...alunos, { nome, cor, tamanho }]
}

alunos
  .sort((a, b) => {
    for (let [testCase, sortCase] of [
      [a.cor > b.cor, 1],
      [a.cor < b.cor, -1],
      [a.tamanho > b.tamanho, -1],
      [a.tamanho < b.tamanho, 1],
      [a.nome > b.nome, 1],
      [a.nome < b.nome, -1],
    ]) {
      if (testCase) return sortCase;
    }
  })

alunos.map(({ nome, cor, tamanho }) => {
  console.log(`${cor} ${tamanho} ${nome}`);
})
*/