const WantHentai = require('../src/hentai');
const nsfw = new WantHentai();

(async () => {
    console.log(await nsfw.getasshentai()); // Obtiene un meme
})();