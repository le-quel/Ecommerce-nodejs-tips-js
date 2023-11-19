'use strict'

const { log } = require('console')
const mongoose = require('mongoose')
const os = require('os')
const process = require('process')
const _SECONDS = 5000
// count connect
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connections::${numConnection}`);
}
// check over load 
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss;
        // example maximum number of connections based on number ost cores
        const maxConnections = numCores * 5;


        console.log(`Active connections::${numConnection}`);
        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024}MB`);
        if (numConnection > maxConnections) {
            console.log('connection over load detected!');
        }
    }, _SECONDS)  // monitor every 5 seconds (check connect mỗi 5 giây bằng hàm setinterval)
}
module.exports = {
    countConnect,
    checkOverload
}

