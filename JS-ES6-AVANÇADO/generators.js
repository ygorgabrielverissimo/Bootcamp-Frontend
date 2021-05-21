
const arr = [1, 20, 35, 4]
const str = "Digital Innovation One"

const obj = {
    values: [1,2,3,4],
    * [Symbol.iterator](){
        for(var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};

for (let value of obj){
    console.log(value);
}

// generator são funções com pausas 

//function* hello() {
//
//    console.log('Hello');
//    yield 1;
//
//    console.log('from');
//    yield 2;
//
//    console.log('function');
//}
//
//const ti = hello();
//
//for (let value of ti){
//    console.log(it.next());
//}
