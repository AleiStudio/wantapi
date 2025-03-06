const WantDiversion = require('../src/diversion');
const api = new WantDiversion();

(async () => {
    console.log(await api.getMeme()); // Obtiene un meme
})();