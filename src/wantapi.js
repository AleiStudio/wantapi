const axios = require('axios');

class WantAPI {
    constructor(token = null, baseURL = 'https://api.want.cat') {
        this.token = token;
        this.client = axios.create({
            baseURL,
        });
    }

    getHeaders() {
        const headers = {};
        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }
        return headers;
    }

    async fetchEndpoint(endpoint) {
        try {
            const response = await this.client.get(`/api/${endpoint}`, {
                headers: this.getHeaders()
            });
            return response.data;
        } catch (error) {
            console.error(`Error en ${endpoint}:`, error.response?.data || error.message);
            return null;
        }
    }

    async getCache() {
        return await this.fetchEndpoint('cache');
    }

    async getBonitas() {
        return await this.fetchEndpoint('bonitas');
    }

    async getAzhentai() {
        return await this.fetchEndpoint('azhentai');
    }

    async getCosplay() {
        return await this.fetchEndpoint('cosplay');
    }

    async getRealboo() {
        return await this.fetchEndpoint('realboo');
    }

    async getMemes() {
        return await this.fetchEndpoint('memes');
    }

    async getGif() {
        return await this.fetchEndpoint('gif');
    }

    async getInterracial() {
        return await this.fetchEndpoint('interracial');
    }

    async getPussie() {
        return await this.fetchEndpoint('pussie');
    }

    async getRealpfp() {
        return await this.fetchEndpoint('realpfp');
    }

    async getNekonsfw() {
        return await this.fetchEndpoint('nekonsfw');
    }

    async getGifmp4rule34() {
        return await this.fetchEndpoint('gifmp4rule34');
    }

    async getTrap() {
        return await this.fetchEndpoint('trap');
    }

    async getRealegirls() {
        return await this.fetchEndpoint('realegirls');
    }
}

module.exports = WantAPI;