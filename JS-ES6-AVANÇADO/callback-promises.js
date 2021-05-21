// utilização de callback antes do ES6

/*

function doSomething(callback) {
    setTimeout(function () {
        callback('first data');
    }, 1000);
}

function doOutherThing(callback) {
    setTimeout(function () {
        callback('second data');
    }, 1000)
}

function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOutherThing(function (data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2)
                        }, 1000);
                    } catch {
                        //error
                    }
                });
            } catch {
                //error
            }
        });
    } catch {
        // error
    }
}
doAll();
*/

// Rescrevendo o código utilizando as promisses. 


// ********** OBS uma promise pode ter 3 status ** Pending ** , ** fulfilled **, ** rejected **
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

console.log("Ordem do sistema")

/*
myPromise
.then((data) => {console.log(data);})
.catch(error => console.log(error));

doOtherPromise
.then(data => {console.log(data)})
.catch(error => console.log(error))
*/

// Promisse encadeada
/*
myPromise
.then(data => {
    console.log(data.split(''));
    return doOtherPromise
})
.then((data2) => console.log(data2.split('')))
.catch(error => console.log('Ops', error));
*/

// Promisses ocorrer em paralelo

