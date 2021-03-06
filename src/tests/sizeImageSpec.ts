import supertest from 'supertest';
import app from '../..';
import imageroute from '../routes/api/sizeImage';

const request = supertest(app);

describe('Test the resizing of the image', () => {
  it('gets the resized image file', async (done) => {
    await request
      .get('/images/resize/fjord?height=200&width=200')
      .expect(200)
      .expect('Content-Type', 'image/jpg');
    done();
  });

  it('test the image name on url is on file', () => {
    const image = 'fjord';
    imageroute.get('/:id', async () => {
      expect('/:id').toBe(image);
    });
  });

  it('test for wrong width (null)', async (done) => {
    const response = await request.get(
      '/images/resize/fjord?height=200&width=a'
    );
    expect(response.text).toEqual(
      'Either the height or width are null or not greater than 0'
    );
    done();
  });

  it('test for wrong height (null)', async (done) => {
    const response = await request.get(
      '/images/resize/fjord?height=a&width=200'
    );
    expect(response.text).toEqual(
      'Either the height or width are null or not greater than 0'
    );
    done();
  });

  it('test for wrong width (< 0)', async (done) => {
    const response = await request.get(
      '/images/resize/fjord?height=200&width=-8'
    );
    expect(response.text).toEqual(
      'Either the height or width are null or not greater than 0'
    );
    done();
  });

  it('test for wrong height (< 0)', async (done) => {
    const response = await request.get(
      '/images/resize/fjord?height=-8&width=200'
    );
    expect(response.text).toEqual(
      'Either the height or width are null or not greater than 0'
    );
    done();
  });
});
