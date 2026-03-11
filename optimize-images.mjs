import sharp from 'sharp';

await sharp('public/images/logo.webp')
  .resize(252)
  .webp({ quality: 80 })
  .toFile('public/images/logo-optimized.webp');
console.log('✅ logo resized done');