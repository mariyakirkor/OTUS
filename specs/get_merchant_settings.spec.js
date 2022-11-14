import helper from '../services/main.service';
import config from '../config/main.config';
import data from '../test_data/merchant_settings';
import merchant_data from '../test_data/get_merchant_settings';

const jwt = config.jwt;
const merchant = config.merchantId;
const project = config.projectId;


describe('Get merchant settings', () => {

    describe('GET /api/v1/publisher_account/merchant/{merchant_id}/project/{project_id}/merchants', () => {

        test('Should get merchant settings', async () => {
            const res = await helper.get_merchant(jwt, merchant, project)
            expect(res.status).toEqual(200);
            expect(res.body).toMatchObject(merchant_data.successGetSettings);
        });

        test('Should return 400 with invalid merchant_id', async () => {
            const res = await helper.get_merchant(jwt, 'qwe', project)

            expect(res.status).toEqual(400);
            expect(res.body).toMatchObject(data.invalidMerchantId);
        });

        test('Should return 400 with invalid project_id', async () => {
            const res = await helper.get_merchant(jwt, merchant, 'qwe')
            expect(res.status).toEqual(400);
            expect(res.body).toMatchObject(data.invalidProjectId);
        });

        test('Should return 422 with nonexists project_id', async () => {
            const res = await helper.get_merchant(jwt, merchant, 12345)
            expect(res.status).toEqual(422);
            expect(res.body).toMatchObject(data.notFoundMerchant);
        });

        test('Should return 422 with nonexists merchant_id', async () => {
            const res = await helper.get_merchant(jwt, 12345, project)
            expect(res.status).toEqual(422);
            expect(res.body).toMatchObject(data.notFoundMerchant);
        });

        test('Should return 401 without auth', async () => {
            const res = await helper.get_merchant('', merchant, project)
            expect(res.status).toEqual(401);
            expect(res.body).toMatchObject(data.unauthorized);
        });

    })
})
