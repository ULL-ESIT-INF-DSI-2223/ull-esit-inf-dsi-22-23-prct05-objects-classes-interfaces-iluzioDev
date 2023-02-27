export function avg(image: number[][], i: number, j: number) {
  let sum = 0;
  let count = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      if (x == 0 && y == 0)
        continue;
      let offset_x = x;
      let offset_y = y;
      if ((i + x) % image.length < 0 )
        offset_x = image.length + x;
      if ((j + y) % image[i].length < 0)
        offset_y = image[i].length + y;
      
      sum += image[(i + offset_x) % image.length][(j + offset_y) % image[i].length];
      count++;
    }
  } 
  return Math.trunc(sum / count);
}

export function mediaFilter (image: number[][]) {
  for (let i = 0; i < image.length; i++)
    if (image.length != image[0].length)
      return undefined;

  let result: number[][] = new Array(image.length).fill(0).map(() => new Array(image[0].length).fill(0));
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      result[i][j] = avg(image, i, j);
    }
  }
  return result;
}