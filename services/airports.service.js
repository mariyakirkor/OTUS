import supertest from 'supertest'
import config from '../config/airports.config'

const { url } = config

let token = ''

const auth = {
    login: (payload) => {
        return supertest(url)
            .post('/tokens')
            .set('Accept', 'application/json')
            .send(payload)
    },

    async getAuthToken() {
        const payload = config.credentials
        const res = await this.login(payload)
        return res.body.token
    },

    async getAuthTokenWithCache() {
        if (token) {
            return token
        }
        token = await this.getAuthToken()
        return token
    },

    airports: () => {
        return supertest(url)
            .get('/airports')
            .set('Accept', 'application/json')
            .send()
    },

    favorites_add: (token, payload) => {
        return supertest(url)
            .post('/favorites')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
    },

    favorites_delete: (token, id) => {
        return supertest(url)
            .delete(`/favorites/${id}'`)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
    }
}

export default auth
