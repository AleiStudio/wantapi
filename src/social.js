const axios = require('axios');

class WantSocial {
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

    async getKick(username) {
        try {
            const response = await this.client.get(`/api/kick/${username}`, {
                headers: this.getHeaders()
            });
            return response.data;
        } catch (error) {
            console.error(`Error en kick/${username}:`, error.response?.data || error.message);
            return null;
        }
    }
}

module.exports = WantSocial;