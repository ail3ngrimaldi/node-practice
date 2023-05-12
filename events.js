const EventEmitter = require('events');

const customEmitter = new EventEmitter();


// Cuando creamos los eventos, es importante el orden en que se crean
// En esta instancia se crea el evento
customEmitter.on('response', (data) => {
    console.log('received')
    console.log(data)
})

// En esta instancia se emite un evento
customEmitter.emit('response', 'Hello WOrld');
customEmitter.emit('response', 'ailen');
customEmitter.emit('response', (2+3));