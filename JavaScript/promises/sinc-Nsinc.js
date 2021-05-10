// ********** Sincrona *************// 
/*
const fs = require('fs')
const path = require('path')
const basePath = './'

console.log('Begin')

   const files = fs.readdirSync(path.resolve(basePath))
   const sentences = files.filter((file) => /s[1-3]/gi.test(file))

   for(const sentence of sentences ){
       const text = fs.readFileSync(path.resolve(basePath, sentence)).toString()
       console.log(text, '\n')
   }
console.log('End')
*/

// ********** Sincrona lendo o arquivo Poema inteiro *************//
// Utilizando a call-back para que a função seja assincrona
// o calback separado serve para que não seja preciso chamar a fução a todo momemto uma partucularidade é que na
// Chamada basta apenas informar o nome da função. 

/*
   const fs = require('fs')
const path = require('path')
const basePath = './'

console.log('Begin')

function callBack (err, data){ 
    if(err) throw err
    console.log(data)
}

fs.readFile(path.resolve(basePath, 'poema.txt'), {encoding: 'utf-8'}, callBack)

console.log('End')

*/

// ********* Sincrona lendo o arquivo Poema PARTICIONADO ***********//

const fs = require('fs')
const path = require('path')
const basePath = './'

function callBack (err, data){ 
    if(err) throw err
    console.log(data)
}

console.log('Begin')

const files = fs.readdirSync(path.resolve(basePath))
const sentences = files.filter((file) => /s[1-3]/gi.test(file))

for(const file of sentences ){
    fs.readFile(path.resolve(basePath, file), { encoding:'utf-8' },callBack)
}

console.log('End')

