// import sharp from 'sharp';

// await sharp('public/images/logo.png')
//   .resize(252)
//   .webp({ quality: 80 })
//   .toFile('public/images/logo.webp');
// console.log('✅ logo.webp done');

// await sharp('public/images/hero-background.jpeg')
//   .webp({ quality: 75 })
//   .toFile('public/images/hero-background.webp');
// console.log('✅ hero-background.webp done');

import sharp from 'sharp';

await sharp('public/images/hero-background.jpeg')
  .webp({ quality: 75 })
  .toFile('public/images/hero-background.webp');
console.log('✅ hero-background.webp done');