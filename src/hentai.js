const axios = require('axios');

class WantHentai {
    constructor(baseURL = 'https://cdn.wantapi.xyz/api') {
        this.client = axios.create({
            baseURL,
        });
    }

    async fetchEndpoint(endpoint) {
        try {
            const response = await this.client.get(`/${endpoint}`);
            return response.data.url;
        } catch (error) {
            console.error(`Error en ${endpoint}:`, error.response?.data || error.message);
            return null;
        }
    }

    async getnekonsfw() {
        return await this.fetchEndpoint('nekonsfw');
    }

    async getwaifus() {
        return await this.fetchEndpoint('Waifus');
    }

    async getasshentai() {
        return await this.fetchEndpoint('asshentai');
    }
}

module.exports = WantHentai;
