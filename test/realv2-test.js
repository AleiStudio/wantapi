const WantReal = require('../src/realv2');
const api = new WantReal();

(async () => {
    console.log(await api.getvideosv2());
    console.log(await api.getgifv2());
    console.log(await api.getcosplayv2());
})();