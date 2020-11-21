const axios = require('axios').default;

class AxiosProvider {
  constructor() {
    this.api = axios.create({});
  }

  async get({ url, params = {}, headers = {} }) {
    const response = await this.api.get(url, {
      params,
      headers,
    });

    return response;
  }
}

module.exports = AxiosProvider;
