const WantReal = require('../src/real');
const api = new WantReal();

(async () => {
    console.log(await api.getbonitas());
})();