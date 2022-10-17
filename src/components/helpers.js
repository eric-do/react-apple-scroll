const generateImageUrlFromIndex = (idx) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${idx
    .toString()
    .padStart(4, "0")}.jpg`;

export const getPreloadedImages = (frameCount) => {
  const images = [];
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = generateImageUrlFromIndex(i);
    images.push(img);
  }
  return images;
};
