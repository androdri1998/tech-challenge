const gifsConfig = require('../../../../../config/gifs');

class GiphyProviderProvider {
  constructor(requestProvider) {
    this.requestProvider = requestProvider;
  }

  async findGiphyByRecipeTitle({ title }) {
    const response = await this.requestProvider.get({
      url: gifsConfig.giphy_search_url,
      params: { api_key: gifsConfig.gifs_api_key, q: title, limit: 1 },
    });

    const giphyResponse = response.data;
    if (giphyResponse.data[0]) {
      const giphy = giphyResponse.data[0];

      return giphy;
    }

    return null;
  }
}

module.exports = GiphyProviderProvider;
