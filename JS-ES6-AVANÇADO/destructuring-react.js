var arr = ['Apple','Banana','Orange',['tomate']];

var apple =arr[0];
var banana =arr[1];
var orange =arr[2];
var tomate = arr[3][0]

// destrutuion assingment

var [apple2, banana2, orange2,[tomate2]] =  ['Apple','Banana','Orange',['tomate']];

console.log(tomate2)



//*********************** Utilizando o Destruct para destruir objetos ***********************************/

var obj = {
    name: 'Ygor',
    prop: {
        age: 28,
        favoritColors: ['Black', 'Blue']
    }
};
//var name = obj.name;
//var age = obj.prop.age;


// destrutuion assingment

var { 
    name, 
    prop: { 
    age: age2,
    favoritColors: [color1, color2]  
    }   
}  = obj;

console.log(name, age2, color1, color2)