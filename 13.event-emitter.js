const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log(`data received`);
})

customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id:${id}`);
})

customEmitter.emit('response', 'ben', 34)