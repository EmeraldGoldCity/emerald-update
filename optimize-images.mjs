import sharp from 'sharp';

await sharp('public/images/hero-background.jpeg')
  .resize(640)
  .webp({ quality: 60 })
  .toFile('public/images/hero-mobile.webp');
console.log('✅ hero-mobile.webp done');
