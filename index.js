const WantDiversion = require('./src/diversion');
const WantHentai = require('./src/hentai');
const WantReal = require('./src/real');
const WantReddit = require('./src/reddit');

module.exports = { WantDiversion, WantHentai, WantReal, WantReddit };

require('./test/npm-test.js');