// criar array chamando a funcção of

//const arr = Array.of(1, 2, 3);

// cada parâmetro que eu passar para essa função se tornara um item do array

// array from

//seleciona todos os div dentro da aplicação, porém não permite a utilização de pops 
//const divs = document.querySelectorAll('div')

//Transformando conteúdos lista coletada em array para realizar operações
//const arrayDivs = Array.from(divs)
//Desta maneira a array aceitará pops e shift

// push adiciona ao final da Lista

// push adiciona no final da fila
// pop remove no final da fila
// unshift  adiciona no começo do arquivo shift remove no começo e retorna quem removeu e não o tamanho.
// concat para concatenar dos arrays. 
// slice é imutável não altera o array original,  retorna o array baseado nos valores solicitados
// splice é imutável alterando o array e retornando o que foi alterado e tmb tem a opção de adicionar.
 
 /*
    const frutas = ['Melancia','Uva']
    const salgados = ['Cochinha', 'pastel','Frango','Risole']
    frutas.push("Morango")
    //frutas.pop()
    frutas.unshift('Caju')
    //frutas.shift()
    const alimentos = frutas.concat(salgados)
    
    console.log(alimentos)
   // console.log(alimentos.slice(-3))
   //console.log(alimentos.splice(2))
   console.log(alimentos.splice(0, 2, 'Pessego'))
   console.log(alimentos)
    */


  // foreach realiza ações para casa item do array. 

  /*const arr =  [1, 2, 3, 4, 5, 6]
    arr.forEach((value, index, arr) => {
        value ++
        console.log(`${index}: ${value}, ${arr}`)
    })
    */
/*
// Map a diferença entre o map e o foreach é que ele retorna  um novo array deste array. 
    const arr1 = [5, 6, 7, 8, 9, 10]
    arr1.map((arr1, index) => {
        console.log(`${index}:${arr1}`)
    })
*/

// flat desce a quantidade de graus que eu determinar na passagem da função
/*
const arr2 = [5, 6, 7, [8, 9,[10,11]], 12]
console.log(arr2.flat(2))
*/

// flatmap primeiro faz map retornando um array depois realiza as ações. 
/*
const arr3 = [5, 6, 7, 12]
console.log(arr3.flatMap(value => [value * 2]))
/*
// keys retorna TODAS AS CHAVES DO ARRAY
/*
const arr3Interator = arr3.keys()
console.log(arr3Interator.next())
console.log(arr3Interator.next())
console.log(arr3Interator.next())
console.log(arr3Interator.next())
console.log(arr3Interator.next())
console.log(arr3Interator.next())
*/ 
 // VALUE TODOS OS VALORES DO ARRAY
/*
 const arr3Interator = arr3.values()
console.log(arr3Interator.next())
console.log(arr3Interator.next())
console.log(arr3Interator.next())
console.log(arr3Interator.next())
console.log(arr3Interator.next())
console.log(arr3Interator.next())
*/
/*
const arr3 = [5, 6, 7, 12]

// entries retorna todos os elementos até que não tenha mais 

const arr3Interator = arr3.entries()
console.log(arr3Interator)
let validacao = false
while(validacao == false){
    if (arr3Interator.next().done === false){
        console.log(arr3Interator.next())
    }
    else {
        validacao = true
    }

}
*/

// find busca no array e retorna o valor pesquisado
// findIndex trás a posição em que a posição foi satisfeita.
/*
const arr = [5, 6, 7, 12]
const firstGreaterThanTwo = arr.findIndex(value => value > 5 && value < 7)
console.log(firstGreaterThanTwo)
*/
// função filter busca todos os elementos que satisfazem uma satisfação.
/*
const arr = [5, 6, 7, 12]
const firstGreaterThanTwo = arr.filter(value => value > 5 && value < 7)
console.log(firstGreaterThanTwo)
*/

//lastindexoff ocorrência de um elemento. / retorna o idex 
/*
const arr = [3, 3, 3, 12]
const firstGreaterThanTwo = arr.indexOf(3)
console.log(firstGreaterThanTwo)

const arr1 = [3, 3, 3, 12]
const firstGreaterThanTwo1 = arr.lastIndexOf(3)
console.log(firstGreaterThanTwo1)
*/

// Includes verifica se o valor existe 

/*
const arr =  [1, 3, 3, 4, 3]
const hasItemOne = arr.includes(1)
console.log(hasItemOne)

const hasItemOne1 = arr.includes(5)
console.log(hasItemOne1)
*/

// some para saber se algum item, 
// very para saber se todos satisfação a função
/*
const arr =  [1, 3, 3, 4, 3]
const hasSomeEvenNumber = arr.some(value =>  value % 2 === 0)
console.log(hasSomeEvenNumber)
*/

// invester o sentido do array
// join transformar um array em outro tipo de dado.

// transformar em string e separa por denomindor comum 
const arr =  [1, 3, 3, 4, 3]
console.log(arr.join('-'))

