const { WantReddit } = require('../index');

(async () => {
  try {
    const mediaUrl = await WantReddit('Staryuukisincensura');
    console.log('Url Conseguida:', mediaUrl);
  } catch (error) {
    console.log('Hubo un error al conseguir el subreddit:', error.message);
  }
})();