const WantHentai = require('../src/hentai');
const api = new WantHentai();

(async () => {
    console.log(await api.getasshentai()); // Obtiene un meme
})();