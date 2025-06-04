const { WantReddit } = require('../index');

(async () => {
  try {
    const datos = await WantReddit('Staryuukisincensura');
    console.log('Título:', datos.title);
    console.log('Autor:', datos.author);
    console.log('Url Conseguida:', datos.mediaUrl);
    console.log('Url del Subreddit:', datos.subreddit);
    console.log('Url del Post:', datos.postUrl);
    console.log('Thumbnail:', datos.thumbnail);
    console.log('Upvotes:', datos.upvotes);
    console.log('Downvotes:', datos.downvotes);
    console.log('Score:', datos.score);
    console.log('Upvote Ratio:', datos.upvoteRatio);
    console.log('Comment Count:', datos.commentCount);
    console.log('Created At:', datos.createdAt);
    console.log('Created At Formatted:', datos.createdAtFormatted);
    console.log('Retrieved At:', datos.retrievedAt);
    console.log('Is NSFW:', datos.isNSFW);
    console.log('Is OC:', datos.isOC);
    console.log('Is Crosspost:', datos.isCrosspost);
    console.log('Is Video:', datos.isVideo);
    console.log('Is Gallery:', datos.isGallery);
    console.log('Media Type:', datos.mediaType);
    console.log('Media Dimensions:', datos.mediaDimensions);
    console.log('Gallery Items:', datos.galleryItems);
    console.log('Total Posts Fetched:', datos.totalPostsFetched);
    console.log('Media Posts Found:', datos.mediaPostsFound);
    console.log('Awards:', datos.awards);
  } catch (error) {
    console.log('Hubo un error al conseguir el subreddit:', error.message);
  }
})();