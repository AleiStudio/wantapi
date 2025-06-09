const WantDiversion = require('./src/diversion');
const WantHentai = require('./src/hentai');
const WantReal = require('./src/real');
const WantReddit = require('./src/reddit');
const WantRealV2 = require('./src/realv2');
const https = require('https');
const pkg = require('./package.json');

function checkForUpdates() {
    https.get(`https://registry.npmjs.org/${pkg.name}/latest`, (res) => {
        let data = '';
        
        res.on('data', (chunk) => data += chunk);
        
        res.on('end', () => {
            try {
                const latest = JSON.parse(data);
                if (latest.version !== pkg.version) {
                    showUpdateMessage(pkg.version, latest.version);
                }
            } catch (e) {
            }
        });
    }).on('error', () => {
    });
}

function showUpdateMessage(currentVersion, latestVersion) {
    const updateMessage = `
╔══════════════════════════════════════════════╗
║                                              ║
║   ¡NUEVA ACTUALIZACIÓN DISPONIBLE!          ║
║   Versión actual: ${currentVersion.padEnd(10)}          ║
║   Última versión: ${latestVersion.padEnd(10)}          ║
║                                              ║
║   Ejecuta:                                   ║
║   npm update ${pkg.name}                     ║
║                                              ║
║   para obtener las últimas mejoras.          ║
║                                              ║
╚══════════════════════════════════════════════╝
`;
    console.log(updateMessage);
}

checkForUpdates();

require('./test/npm-test.js');

module.exports = { WantDiversion, WantHentai, WantReal, WantRealV2, WantReddit };