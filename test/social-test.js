const WantSocial = require('../src/social');

const social = new WantSocial('TOKEN_https://api.want.cat/');

(async () => {
    console.log('Testing WantSocial with token...');
    
    console.log('Testing getKick...');
    const kick = await social.getKick('adrianozendejas32');
    console.log('Kick:', kick);
})();