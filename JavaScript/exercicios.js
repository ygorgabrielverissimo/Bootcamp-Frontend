let aluno = [
    {
        name: "Ygor",
        note: 7

    },
    {
        name: "Gabriel",
        note: 5

    },
    {
        name: "verissimo",
        note: 7

    },
]
// adicionando um pbjeto na lista de objetos com os mesmos parâmetros
aluno.push({ name: "Schulz",  note: 9})
//aluno.pop()
/*
aluno.forEach(element => {

    if(element.note >= 7 ){
        console.log(`Aluno:${element.name} Nota: ${element.note} Aprovado`)
    }
    else{
        console.log(`Aluno:${element.name} Nota: ${element.note} Reprovado`)
    }
      
    
});
*/


// diferente da condição acima o filter trás um novo array com as validações satisfeitas
const aprovado = aluno.filter(value => value.note >= 7)
console.log(aprovado)