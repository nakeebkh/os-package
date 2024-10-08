const os = require('os');

function getOSInfo() {
    return {
        userInfo: os.userInfo(),
        platform: os.platform(),
        arch: os.arch(),
        cpu: os.cpus(),
        freemem: os.freemem(),
        totalmem: os.totalmem(),
        uptime: os.uptime(),
        hostname: os.hostname(),
        networkInterfaces: os.networkInterfaces(),
    };
}


module.exports = getOSInfo;


