// removendo itens duplicados

/*
const models = [1, 2, 2, 3, 4] 
const array =  [1, 2, 3, 3, 4]

for(var i = 0; i < array.length; i++){

    if(models.indexOf(models[i]) === array.indexOf(array[i])){
      models.pop([i])
    } 
}

console.log(models)
*/


/*
    // Exercício filter filter
    let pets = [
    {
        name: "Rex",
        type: "Dog",
        age: 10
    },
    {
        name: "Miau",
        type: "Cat",
        age: 2

    },
    {
        name: "Gutp",
        type: "fish",
        age: 1

    },
]

const newPets = pets.filter((pet) => {
    return pet.age < 5
}) 

console.log(newPets)

*/

//Exercício de Map
/*
let pets = [
    {
        name: "Rex",
        type: "Dog",
        age: 10,
        wight: 5
    },
    {
        name: "Miau",
        type: "Cat",
        age: 2,
        wight: 3

    },
    {
        name: "Gutp",
        type: "fish",
        age: 1,
        wight: 2

    },
    {
        name: "Fred",
        type: "Papagaio",
        age: 5,
        wight: 1.5

    },
]

const namePets = pets.map(pets => pets.name)
console.log(namePets, pets)
*/


/*
// mesma função utilizando foreach

let pets1 = [
    {
        name: "Rex - 1",
        type: "Dog",
        age: 10,
        wight: 5
    },
    {
        name: "Miau - 1",
        type: "Cat",
        age: 2,
        wight: 3

    },
    {
        name: "Gutp - 1",
        type: "fish",
        age: 1,
        wight: 2

    },
    {
        name: "Fred - 1",
        type: "Papagaio",
        age: 5,
        wight: 1.5

    },
]

const namesPetsForeach = []

pets1.forEach(element => {
    namesPetsForeach.push(element.name)
})
*/

// Utilizando reduco ele retorna um valor para todos um único valor comum
/*

let pets = [
    {
        name: "Rex - 1",
        type: "Dog",
        age: 10,
        wight: 5
    },
    {
        name: "Miau - 1",
        type: "Cat",
        age: 2,
        wight: 3

    },
    {
        name: "Gutp - 1",
        type: "fish",
        age: 1,
        wight: 2

    },
    {
        name: "Fred - 1",
        type: "Papagaio",
        age: 5,
        wight: 1.5

    },
]

const contWight = pets.reduce((total, pets) =>{
   return{
       totalAge:  total.totalAge += pets.age,
       totalWight: total.totalWight += pets.wight
   } 
       
}, {totalAge: 0, totalWight: 0})

console.log(contWight)
*/


// reduce, retornando um array 
/*
let pets = [
    {
        name: "Rex - 1",
        type: "Dog",
        age: 10,
        wight: 5
    },
    {
        name: "Miau - 1",
        type: "Cat",
        age: 2,
        wight: 3

    },
    {
        name: "Gutp - 1",
        type: "fish",
        age: 1,
        wight: 2

    },
    {
        name: "Fred - 1",
        type: "Papagaio",
        age: 5,
        wight: 1.5

    },
]

const returnArray = pets.reduce((total, pets) => [
  arrayName = total.push(pets.name)
]      
, arrayName = [])

console.log(returnArray)

*/

/*
let positivo = 0;
let negativo = 0;
let numPar = 0;
let numImpar = 0;

for (i=0; i<6; i++){
  var numero = gets();
     if(numero % 2 === 0){
      numPar ++
    }else {
      numImpar ++
    }
    if(numero > 0){
      positivo ++
    }else {
      negativo ++
    }
}
console.log(`${numPar} valor(es) par(es)`)
console.log(`${numImpar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)
*/

let valor = 89
let nota100 = parseInt(valor/100);
let nota50 = parseInt((valor-nota100*100)/50);
let nota20 = parseInt((valor-nota100*100-nota50*50)/20);
let nota10 = parseInt((valor-nota100*100-nota50*50-nota20*20)/10);
let nota5  = parseInt((valor-nota100*100-nota50*50-nota20*20-nota10*10)/5);
let nota2  = parseInt((valor-nota100*100-nota50*50-nota20*20-nota10*10-nota5*5)/2);
let nota1  = parseInt((valor-nota100*100-nota50*50-nota20*20-nota10*10-nota5*5-nota2*2)/1);
 
console.log(valor);

console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00"); 
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log( nota5 + " nota(s) de R$ 5,00");
console.log( nota2 + " nota(s) de R$ 2,00");
console.log( nota1 + " nota(s) de R$ 1,00");