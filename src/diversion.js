const axios = require('axios');

class WantDiversion {
    constructor(baseURL = 'https://api.want.cat/api') {
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

    async getmeme() {
        return await this.fetchEndpoint('memes');
    }
}

module.exports = WantDiversion;
