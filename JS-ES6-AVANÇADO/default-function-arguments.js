function numberRandom(){
    return Math.random() * 10 
}

function multiply(a = 2,b = numberRandom()){
    return a * b;
}

console.log(multiply(5))