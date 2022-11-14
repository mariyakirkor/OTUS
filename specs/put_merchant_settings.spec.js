import helper from '../services/main.service';
import config from '../config/main.config';
import data from '../test_data/merchant_settings';
import merchant_data from '../test_data/put_merchant_settings';

const jwt = config.jwt;
const merchant = config.merchantId;
const project = config.projectId;


describe('Update merchant settings', () => {

    describe('PUT /api/v1/publisher_account/merchant/{merchant_id}/project/{project_id}/merchants', () => {

        test('Should update merchant settings with required params', async () => {
            const payload = merchant_data.request.requiredFiels
            const res = await helper.update_merchant(jwt, payload, merchant, project)
            expect(res.status).toEqual(204);
        });

        test('Should update merchant settings with all params', async () => {
            const payload = merchant_data.request.allFields
            const res = await helper.update_merchant(jwt, payload, merchant, project)
            expect(res.status).toEqual(204);
        });

        test('Should return 400 with short secret', async () => {
            const payload = merchant_data.request.shortSecret
            const res = await helper.update_merchant(jwt, payload, merchant, project)
            expect(res.status).toEqual(400);
            expect(res.body).toMatchObject(merchant_data.response.shortSecret);
        });

        test('Should return 400 with wrong fee_fx.payer', async () => {
            const payload = merchant_data.request.notOneOfPayer
            const res = await helper.update_merchant(jwt, payload, merchant, project)
            expect(res.status).toEqual(400);
            expect(res.body).toMatchObject(merchant_data.response.notOneOfPayer);
        });

        test('Should return 400 with invalid merchant_id', async () => {
            const payload = merchant_data.request.allFields
            const res = await helper.update_merchant(jwt, payload, 'qwer', project)
            expect(res.status).toEqual(400);
            expect(res.body).toMatchObject(data.invalidMerchantId);
        });

        test('Should return 400 with invalid project_id', async () => {
            const payload = merchant_data.request.allFields
            const res = await helper.update_merchant(jwt, payload, merchant, 'qwer')
            expect(res.status).toEqual(400);
            expect(res.body).toMatchObject(data.invalidProjectId);
        });

        test('Should return 422 with nonexists project_id', async () => {
            const payload = merchant_data.request.allFields
            const res = await helper.update_merchant(jwt, payload, merchant, 12345)
            expect(res.status).toEqual(422);
            expect(res.body).toMatchObject(data.notFoundMerchant);
        });

        test('Should return 422 with nonexists merchant_id', async () => {
            const payload = merchant_data.request.allFields
            const res = await helper.update_merchant(jwt, payload, 12345, project)
            expect(res.status).toEqual(422);
            expect(res.body).toMatchObject(data.notFoundMerchant);
        });

        test('Should return 401 without auth', async () => {
            const payload = merchant_data.request.allFields
            const res = await helper.update_merchant('', payload, merchant, project)
            expect(res.status).toEqual(401);
            expect(res.body).toMatchObject(data.unauthorized);
        });

    })
})
