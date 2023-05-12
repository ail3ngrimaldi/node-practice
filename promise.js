const {readFile} = require('fs/promises');

//Forma de usar promesas definitiva
async function read () {
    try {
        const result = await readFile('./data/first.txt', 'utf-8');
        console.log(result);
        const result2 = await readFile('./data/second.txt', 'utf-8');
        console.log(result2);
        const result3 = await readFile('./data/third.txt', 'utf-8');
        console.log(result3);
        const result4 = await readFile('./data/fourth.txt', 'utf-8');
        console.log(result4);
    } catch (error) {
        console.log(error);
    }
}

read()

//funcion asíncrona, que espera un callback como segundo parámetro
// readFile('./data/first.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//     }

//     console.log(data)
// })

//Misma función que arriba pero convertida en promesa
// Creo una promesa, espera que se ejecute un código después de cierto tiempo.
// Promise espera una función como parámetro, transformo el código en una promesa.
// Si ocurre el error, ejecuto el reject, que es una función
// Si no ocurre el error, ejecutamos el resolve, e imprimimos data
// new Promise(function (resolve, reject) {
//     readFile('./data/first.txt', 'utf-8', (err, data) => {
//         if (err) {
//             reject(err)
//         }
//             resolve(data)
//     })
// })


// function getText(pathFile) {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, 'utf-8', (err,data) => {
//             if (err) {
//                 reject(err)
//             } 
//             resolve(data)
//         })
//     })
// }

// getText('./data/first.txt')
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))