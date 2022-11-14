import supertest from 'supertest'
import config from '../config/main.config'

const { url } = config

const helper = {
    get_merchant: (token, merchant, project) => {
        return supertest(url)
            .get(`/api/v1/publisher_account/merchant/${merchant}/project/${project}/merchants`)
            .set('Authorization', `Bearer ${token}`)
    },
    update_merchant: (token, payload, merchant, project) => {
        return supertest(url)
            .put(`/api/v1/publisher_account/merchant/${merchant}/project/${project}/merchants`)
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(payload)
    },

}

export default helper
