
import sharp from 'sharp';
await sharp('public/images/hero-background.jpeg')
  .webp({ quality: 50 })
  .toFile('public/images/hero-background.webp');
console.log('✅ done');