const axios = require('axios');

async function WantReddit(subreddit) {
  try {
    const response = await axios.get(`https://reddit.wantapi.xyz/api/${subreddit}`);
    return response.data.mediaUrl;
  } catch (error) {
    console.error('Error fetching Reddit media:', error);
    throw error;
  }
}

module.exports = WantReddit;