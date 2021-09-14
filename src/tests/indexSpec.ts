import supertest from 'supertest';
import app from '../../index';

// we tell supertest we are running the tests on the imported app
const request = supertest(app);
describe('Test /home endpoint response', () => {
  it('gets the home endpoint', async (done) => {
    const response = await request.get('/home');
    expect(response.status).toBe(200);
    done();
  });
});
