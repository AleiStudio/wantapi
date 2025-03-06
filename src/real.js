const axios = require('axios');

class WantReal {
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

    async getbonitas() {
        return await this.fetchEndpoint('bonitas');
    }

    async getboobs() {
        return await this.fetchEndpoint('realboobs');
    }

    async getcosplay() {
        return await this.fetchEndpoint('cosplay');
    }

    async getegirls() {
        return await this.fetchEndpoint('realegirls');
    }

    async getpfp() {
        return await this.fetchEndpoint('realpfp');
    }

    async getgif() {
        return await this.fetchEndpoint('gif');
    }

    async getinterracial() {
        return await this.fetchEndpoint('interracial');
    }
}

module.exports = WantReal;
