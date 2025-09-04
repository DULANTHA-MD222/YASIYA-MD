const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=pIowmYbK#s3d9Q_om8_A_cnGlWrs0M5FirqHJogrscJFeiIZnqMc'
};
