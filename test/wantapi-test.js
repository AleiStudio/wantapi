const WantAPI = require('../src/wantapi');

const api = new WantAPI('TOKEN_https://api.want.cat/');

(async () => {
    console.log('Testing WantAPI with token...');
    
    console.log('Testing getCache...');
    const cache = await api.getCache();
    console.log('Cache:', cache);
    
    console.log('\nTesting getBonitas...');
    const bonitas = await api.getBonitas();
    console.log('Bonitas:', bonitas);
    
    console.log('\nTesting getMemes...');
    const memes = await api.getMemes();
    console.log('Memes:', memes);
    
    console.log('\nTesting getCosplay...');
    const cosplay = await api.getCosplay();
    console.log('Cosplay:', cosplay);
    
    console.log('\nTesting getNekonsfw...');
    const neko = await api.getNekonsfw();
    console.log('Neko:', neko);
    
    console.log('\nTesting getTrap...');
    const trap = await api.getTrap();
    console.log('Trap:', trap);
})();