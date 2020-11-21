const gifsConfig = require('../../../../../config/gifs');

class GiphyProviderProvider {
  constructor(requestProvider) {
    this.requestProvider = requestProvider;

    this.gifs = [
      {
        type: 'gif',
        title: 'Title recipe 1',
        images: {
          preview_gif: {
            height: '103',
            width: '155',
            size: '49618',
            url: 'link to giphy 1',
          },
        },
      },
      {
        type: 'gif',
        title: 'Title recipe 2',
        images: {
          preview_gif: {
            height: '103',
            width: '155',
            size: '49618',
            url: 'link to giphy 2',
          },
        },
      },
    ];
  }

  async findGiphyByRecipeTitle({ title }) {
    await this.requestProvider.get({
      url: gifsConfig.url,
      params: { api_key: gifsConfig.gifs_api_key, q: title, limit: 1 },
    });

    const gifFound = this.gifs.find(gif => gif.title === title);

    return gifFound || null;
  }
}

module.exports = GiphyProviderProvider;
