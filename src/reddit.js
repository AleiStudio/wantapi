const axios = require('axios');

async function WantReddit(subreddit) {
  try {
    const response = await axios.get(`https://reddit.want.cat/api/${subreddit}`);
    return {
      title: response.data.title,
      author: response.data.author,
      subreddit: response.data.subreddit,
      mediaUrl: response.data.mediaUrl,
      postUrl: response.data.postUrl,
      thumbnail: response.data.thumbnail,
      upvotes: response.data.upvotes,
      downvotes: response.data.downvotes,
      score: response.data.score,
      upvoteRatio: response.data.upvoteRatio,
      commentCount: response.data.commentCount,
      createdAt: response.data.createdAt,
      createdAtFormatted: response.data.createdAtFormatted,
      retrievedAt: response.data.retrievedAt,
      isNSFW: response.data.isNSFW,
      isOC: response.data.isOC,
      isCrosspost: response.data.isCrosspost,
      isVideo: response.data.isVideo,
      isGallery: response.data.isGallery,
      mediaType: response.data.mediaType,
      mediaDimensions: response.data.mediaDimensions,
      galleryItems: response.data.galleryItems,
      totalPostsFetched: response.data.totalPostsFetched,
      mediaPostsFound: response.data.mediaPostsFound,
      awards: response.data.awards,
    };
  } catch (error) {
    console.error('Error fetching Reddit media:', error);
    throw error;
  }
}

module.exports = WantReddit;