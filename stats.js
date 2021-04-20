const os = require('os')
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const men = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((men / total) * 100)
    
    const stats = {
        free: `${men} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    }
    
    console.clear()
    console.log('======= PC STATS =======')
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)
}, 1000)