const { createReadStream } = require('fs')
const { writeFile } = require('fs/promises')

const createBigFile = async () => {
    await writeFile('./data/bigfile.txt', 'hello world'.repeat(10000))
}
createBigFile();

const stream = createReadStream('./data/bigfile.txt')

stream.on('data', function (chunk) {
    console.log(chunk.toString());
})

stream.on('end', () => {
    console.log('ya termine de leer el archivo')
})

stream.on('error', (error) => {
    console.log(error)
})