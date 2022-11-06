import auth from '../services/airports.service';
import config from '../config/airports.config';

let token;
let airportInfo = config.airportInfo;
let favorite_id;

describe('Airports', () => {

    describe('POST /api/favorites', () => {

        test('Add an airport to favorites', async () => {
            token = await auth.getAuthTokenWithCache();
            const payload = { airport_id: airportInfo.id }
            const res = await auth.favorites_add(token, payload)

            expect(res.status).toEqual(201);
            expect(typeof res.body.data).toEqual('object');
            expect(typeof res.body.data.id).toEqual('string');
            expect(res.body.data.type).toEqual('favorite');
            expect(typeof res.body.data.attributes).toEqual('object');
            expect(typeof res.body.data.attributes.airport).toEqual('object');
            expect(res.body.data.attributes.note).toEqual(null);
            expect(res.body.data.attributes.name).toEqual(airportInfo.name);
            expect(res.body.data.attributes.city).toEqual(airportInfo.city);
            expect(res.body.data.attributes.country).toEqual(airportInfo.country);
            expect(res.body.data.attributes.iata).toEqual(airportInfo.iata);
            expect(res.body.data.attributes.icao).toEqual(airportInfo.icao);
            expect(res.body.data.attributes.latitude).toEqual(airportInfo.latitude);
            expect(res.body.data.attributes.longitude).toEqual(airportInfo.longitude);
            expect(res.body.data.attributes.altitude).toEqual(airportInfo.altitude);
            expect(res.body.data.attributes.timezone).toEqual(airportInfo.timezone);

            favorite_id = res.body.data.id;
        })

        test.each([['some airport'], [123], [`${airportInfo.id}`], ['']])
            ('Shouldn\'t add airport to favorites', async (a) => {
                const payload = { airport_id: a }
                const res = await auth.favorites_add(token, payload)

                expect(res.status).toEqual(500);
            });

        test('Add an airport to favorites without auth', async () => {
            const payload = { airport_id: airportInfo.id }
            const res = await auth.favorites_add('', payload)

            expect(res.status).toEqual(401);
            expect(res.body.errors.length).toEqual(1);
            expect(res.body.errors[0].status).toEqual('401');
            expect(res.body.errors[0].title).toEqual('Unauthorized');
            expect(res.body.errors[0].detail).toEqual('You are not authorized to perform the requested action.');
        })
    })

    describe('POST /api/favorites', () => {

        test('Delete favorite by id', async () => {
            const res = await auth.favorites_delete(token, favorite_id)
            expect(res.status).toEqual(204);
        })
    })
})
