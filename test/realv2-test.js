const WantReal = require('../src/realv2');
const realv2 = new WantReal();

(async () => {
    console.log(await realv2.getlesbianv2());
    console.log(await realv2.gettransgenderv2());
    console.log(await realv2.getbbcv2());
    realv2.getbbcv2(5).then(urls => {console.log(urls);});
})();