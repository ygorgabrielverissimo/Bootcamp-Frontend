const uniqueId =  Symbol();
console.log(uniqueId)

// well Nowns symboys

/*
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 20, 35, 4]
const it = arr[Symbol.iterator]();

for(var i = 0; i <= arr.length; i++ ){
    console.log(it.next())
}
*/

// mesma estrutura utilizando o destruction
/*
const arr = [1, 20, 35, 4]
const it = arr[Symbol.iterator]();

while(true){
    let {value, done} = it.next()
    if (done){
        break
    }
    console.log(value)
}
*/
// o ES6 utilizando para agilizar o serviço de iteração do array

/*
const arr = [1, 20, 35, 4]

for(let value of arr){
    console.log(value)
}
*/

// está função pode ser utlizado em todas as funcções que poderem que tem em seu prototype a função symbol iterator
// podendo ser utilizado em string e arrays. para utilizar com pobjeto pode realizar a combinação do spread com symbol

const arr = [1, 20, 35, 4]
const str = "Digital Innovation One"

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i =0;
        return{
            next:() => {
                i++;

                return {
                    value: this.values[i-1],
                    done: i > this.values.length
                };
            }
        };
    }
};
 const it = obj[Symbol.iterator]();

for(let value of obj){
    console.log(value)
}

