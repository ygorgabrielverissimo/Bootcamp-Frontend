// **************** Formas de escrever e enterder arrow functions *********************** //

var sum = (a, b) => {
   return a + b;
}
console.log(sum(5, 15))

// se existir somente um argumento em minha função eu posso omitir os parêntese 

var sum1 = a => {
   return a + 10
}
console.log(sum1(12))

// desclaração de objeto comum
/*
var meuCarro = new Object();
meuCarro.fabricacao = "ford";
meuCarro.ano = 2014;
meuCarro.cor = "Preto"

meuCarro.fabricacao = "fiat"
 
function iterarObj(obj){
    resultado = ""
    for (var i in obj){
        if(obj.hasOwnProperty(i)){
            resultado += obj.cor
        }
    }
    return resultado
}
*/

console.log(iterarObj(meuCarro))

// retornarndo objeto utilizando arrow function

var createObj = () => ({ test: 123, name: "Ygor Gabriel Verissimo"});
console.log(createObj());

