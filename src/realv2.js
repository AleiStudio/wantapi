const axios = require('axios');

class WantReal {
    constructor(baseURL = 'https://real.want.cat/api') {
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

    async getvideos() {
        return await this.fetchEndpoint('videos');
    }

    async getgifv2() {
        return await this.fetchEndpoint('gifs');
    }

    async getcosplayv2() {
        return await this.fetchEndpoint('cosplay');
    }
}

module.exports = WantReal;
