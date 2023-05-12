const os = require('os');

console.log(os.userInfo()); // permite obtener info del usuario
console.log(os.uptime()); // me da el tiempo que ha transcurrido desde que encendí esta máquina (en segundos)
console.log(os.platform()); // me permite ver el sistema operativo en el que se está ejecutando node
console.log(os.totalmem()) // información de la memoria, para ver la memoria total
console.log(os.freemem()) // para ver la memoria libre

// Permite ver la información en forma de tabla 
console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})