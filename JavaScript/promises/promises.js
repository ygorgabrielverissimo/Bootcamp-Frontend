
//************************** Utilização da promisse ***************************************//
/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('End'), 5000)
})

console.log('Begin')
promise.then((data) => console.log(data))
*/

// ************* Funcionamento do promisse como um todo sem a utilização da lib *****************//
/*
const fs = require('fs')
const path = require('path')
const basePath = './'

function readFileAsync(path, options){
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) return reject(err)
            return setTimeout(() => resolve(data), 5000) 
        })
    })
}

console.log('Begin')
readFileAsync(path.resolve(basePath, 'poema.txt'), {encoding: 'utf-8'})
.then(console.log)
.catch(console.error)
console.log('End')
*/

// *************************** utilizando promisses com libs *********************************//
/*
const fs = require('fs')
const { promisify } = require('node:util')
const path = require('path')
const basePath = './'

const { promisiFy } = require('util')
const readFileAsync = promisiFy(fs.readFile)

console.log('Begin')

readFileAsync(path.resolve(basePath, 'poema.txt'), {encoding: 'utf-8'})
    .then(console.log)
    .catch(console.error)
    console.log('End')
 */

// Utilizando a função coinflip para ilustrar as 3 maneiras de utilizar o  ENCADEAMENTO DE PROMISES

//*********** OBS: função que tem como caracteristica de 50% de chance 
//************* de ter um resolver e 50% de chance de ter um reject ****************************// 

// ********************************** primeira utilização: *************************************//

// Caso o Cath esteja na segunda linha ele dará o erro e executará o que tiver depois 
// pois o catch satisfaz apenas uma then, se fosse necessário aplicar o mesmo para os demais seria
// adcionar outros catchs 

//const coinflip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('opss'))

//coinflip
//then((data) => console.log(data, '1'))
//then(() => console.log('end1'))
//catch((err) => console.log('Erro1'))

//***************** Variação do catch no meio da função ****************************************//

//const coinflip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('opss'))

//coinflip
//.then((data) => console.log(data, '1'))
//.catch((err) => console.log('Erro1'))
//.then(() => console.log('end1'))

// ******************************** Segunda Utilização *****************************************// 

/*
const coinflip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('opss'))

coinflip
.then((data) => console.log('Yay 2'))
.then(() => console.log('Result'))
.then(() => console.log('end1'))

coinflip
.catch(() => { throw new Error('First Catch') })
.catch((err) => console.error('Erro in first case, net then will not execute'))

*/

// ******************************** Terceira Utilização  *****************************************//

const coinflip = new Promise(
(resolve, reject) => setTimeout(() => Math.random() > 0.5 ? resolve('Yay') : reject('opss'), 2000))

const p = Promise.resolve('resolve').then(coinflip)

p.then(console.log).catch(() => console.log('error'))
