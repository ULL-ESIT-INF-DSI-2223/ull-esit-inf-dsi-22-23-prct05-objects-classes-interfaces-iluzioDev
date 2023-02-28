/**
 * Calculates the average of the surrounding pixels of a given image
 * @param image Image to be filtered
 * @param i Row of the pixel to be filtered
 * @param j Column of the pixel to be filtered
 * @returns Avergae of the surrounding pixels
 */
export function avg(image: number[][], i: number, j: number) {
  let sum = 0;
  let count = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x == 0 && y == 0) continue;
      sum +=
        image[(i + x + image.length) % image.length][
          (j + y + image[i].length) % image[i].length
        ];
      count++;
    }
  }
  return Math.trunc(sum / count);
}

/**
 * Applies a filter to an black and white image in order to smooth it
 * @param image Image to be filtered
 * @returns Filtered image or undefined if the image is not square
 */
export function mediaFilter(image: number[][]) {
  for (let i = 0; i < image.length; i++)
    if (image.length != image[0].length) return undefined;

  let result: number[][] = new Array(image.length)
    .fill(0)
    .map(() => new Array(image[0].length).fill(0));
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      result[i][j] = avg(image, i, j);
    }
  }
  return result;
}
