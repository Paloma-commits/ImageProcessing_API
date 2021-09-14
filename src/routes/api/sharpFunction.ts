import sharp from 'sharp';

function resize(
  height: number,
  width: number,
  imagepath: string,
  resizedpath: string
): void {
  sharp(imagepath).resize(height, width).toFile(resizedpath);
}
export default resize;
