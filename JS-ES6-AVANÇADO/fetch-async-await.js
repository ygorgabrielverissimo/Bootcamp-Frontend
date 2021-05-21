/* **************** Utilizando para fazer requesições do arquivos externos *************************
fetch('./db.json')
.then(responseStream => {
 if(responseStream.status === 200){
     return responseStream.json()
 }else {
     throw new Error('Request error');
 }    
}

).then(data => {
    console.log(data);
})
.catch(err => {
    console.log('Erro: ', err);
});
*/

// ****************** Utilização de async / await **********************************//
// Abaixo segue código de comparação da utilização de comparação da 
// criação de uma promise propriamente dita e  utilizando Async


//  Promise
/*
const myPromise = () =>
    new Promise((resolve, reject) => {  
        setTimeout(() => {
            resolve('First data');
        }, 3000);
    })

const doOtherPromise = () =>
    new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('Second data');
    }, 1000)
});

Promise.race([myPromise(), doOtherPromise()]).then(data => {
    console.log(data.slice(''))
})
*/

// Async abaixo

const myPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(123456);
        }, 3000)
    });

const simpleFunc = async () => {
    const data = await Promise.all([
        myPromise(), 
        fetch('./db.json').then(resStream => resStream.json())
     ]); 

    return data;
};

simpleFunc()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })


