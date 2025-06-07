const axios = require('axios');

class WantRealv2 {
    constructor(baseURL = 'https://real.want.cat/api') {
        this.client = axios.create({
            baseURL,
        });
    }

    async fetchEndpoint(endpoint, count = null) {
        try {
            const urlPath = count ? `${count}/${endpoint}` : endpoint;
            const response = await this.client.get(`/${urlPath}`);
            
            if (count) {
                const urls = [];
                for (let i = 1; i <= count; i++) {
                    const urlKey = i === 1 ? 'url' : `url-${i}`;
                    if (response.data[urlKey]) {
                        urls.push(response.data[urlKey]);
                    }
                }
                return urls;
            }
            
            return response.data.url;
        } catch (error) {
            console.error(`Error en ${endpoint}:`, error.response?.data || error.message);
            return null;
        }
    }

    async getvideosv2(count = null) {
        return await this.fetchEndpoint('videos', count);
    }

    async getgifv2(count = null) {
        return await this.fetchEndpoint('gifs', count);
    }

    async getcosplayv2(count = null) {
        return await this.fetchEndpoint('cosplay', count);
    }

    async getassv2(count = null) {
        return await this.fetchEndpoint('ass', count);
    }
}

module.exports = WantRealv2;