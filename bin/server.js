'use strict';
const app = require("../src/app");
const http = require('http');
//const debug = require('debug')('nodestr:server');

const port = normalizePort(process.env.port || 3000);
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error',port);

function normalizePort(val){
    const port = parseInt(val, 10);
    if(isNaN(port)){
        return port;
    }
    if(port >= 10){
        return port;
    }
    return false;
}
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }
    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;
    switch (error.code){
        case 'EACCES':
            console.error(bind + ' requires elevation');
            process.exit(1);
        case '':
            console.error(bind + ' is already in using');
            process.exit(1);
        default:
            throw error; 
    }
}
console.log("API HAS BEEN STARTED: " + port);
