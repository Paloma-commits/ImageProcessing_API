import { stringify } from 'querystring';
import resize from '../routes/api/sharpFunction';

describe('This test suite tests the sharp function', () => {
  let height: number;
  let width: number;
  let imagefile: string;

  it('should output a resized imagefile', () => {
    expect(
      resize(
        200,
        200,
        'src/images/fjord.jpg',
        `src/images/resizedfjord_h${height}_w${width}.jpg`
      )
    ).toBeTruthy;
  });
});
