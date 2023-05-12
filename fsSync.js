const fs = require('fs');

const first = fs.readFileSync('./data/first.txt', 'utf-8')
const second = fs.readFileSync('./data/second.txt', 'utf-8')
const third = fs.readFileSync('./data/third.txt', 'utf-8')
const fourth = fs.readFileSync('./data/fourth.txt')

const primeraParte = 'Por ese gran argentino';
const algoMas = 'Que se supo conquistar';

const fifth = fs.writeFileSync('./data/fifth.txt', primeraParte, {
    flag: 'a',
})

console.log(first, second, third, fourth.toString())