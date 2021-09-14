import supertest from 'supertest';
import app from '../../index';

// we tell supertest we are running the tests on the imported app
const request = supertest(app);

describe('Test /images endpoint response', () => {
  it('gets the images endpoint', async (done) => {
    const response = await request.get('/images');
    expect(response.status).toBe(200);
    done();
  });
});
