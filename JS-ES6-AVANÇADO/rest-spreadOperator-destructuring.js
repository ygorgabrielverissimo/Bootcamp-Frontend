// var sum = (a, b) => {
//    return a + b;
// }
// console.log(sum(5, 15))

 // forma antiga quanse se passava mais de um argumento como parâmetro

 function sum(a ,b ){
     var value = 0;
     for(var i = 0; i < arguments.length; i++){
         value += arguments[i];
     }
     return value
 } 
 console.log(sum(1,2,3,4,5,0,6,5,8))

 /***************** Noava Maneira utilizando a função request *********************************************/

// operador rest operator ...

function sum1(...args){
    return args.reduce((acc, value) => acc + value, 0)
}
console.log(sum(1,2,3,4,5,0,6,5,8))

function sum2(a, b, ...rest){
    console.log(a, b, rest)
}
//console.log(sum2(1,2,3,4,5,0,6,5,8))

// O spread Operator pode ser utilizado em String arrays e Objetos e objetos iteráveis.

const str = 'Digital Innovation One';
const arr =  [1, 2, 3, 4]

function logArgs(a, b, c){
  console.log(a,b,c )
}
const arr2 = [...arr, 7, 8 , 9 ]
console.log(arr2)
logArgs(...arr)

// utilizando o spread para criar objetos só é possível crialo apartir de um segundo objeto.

const obj = {
    test: '123'
}
const obj2 ={
    ...obj,
    test2:'7 8 9'
}
console.log(obj2)


// segundo exemplo explicando o motivo de não funcionar na contrução de um array. 

