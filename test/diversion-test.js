const WantDiversion = require('../src/diversion');
const api = new WantDiversion();

(async () => {
    console.log(await api.getmeme()); // Obtiene un meme
})();