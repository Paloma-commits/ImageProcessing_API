import resize from '../routes/api/sharpFunction';
import fs from 'fs';

describe('This test suite tests the sharp function', () => {
  const height = 50;
  const width = 50;
  const file = `src/images/resizedfjord_h${height}_w${width}.jpg`;
  const imagepath = 'src/images/fjord.jpg';

  it('should output a resized imagefile if it exists', async () => {
    expect(fs.existsSync(file)).toBeFalse;

    await resize(height, width, imagepath, file);

    expect(fs.existsSync(file)).toBeTrue;

    //delete the file after it was created for testing
    fs.rmSync(file);
  });
});
