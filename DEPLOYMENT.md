# Quick Deployment Guide

## Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

## Build Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

This creates an optimized static site in the `dist/` folder.

### 3. Test Locally
```bash
npm run preview
```

Visit http://localhost:4321 to test the production build.

## Deployment Options

### Option 1: Vercel (Recommended) ⚡
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Or use Vercel Dashboard:**
1. Go to vercel.com
2. Import your Git repository
3. Vercel auto-detects Astro
4. Click Deploy!

**Settings:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**Or use Netlify Dashboard:**
1. Drag and drop the `dist/` folder
2. Done!

**Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### Option 3: Cloudflare Pages
1. Connect your Git repository
2. Build settings:
   - Build command: `npm run build`
   - Build output: `/dist`
   - Root directory: `/`
3. Deploy!

### Option 4: AWS S3 + CloudFront

```bash
# Build the site
npm run build

# Install AWS CLI (if not installed)
# Upload to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

## Custom Domain Setup

### Vercel/Netlify/Cloudflare
1. Go to domain settings in your dashboard
2. Add your custom domain (e.g., emeraldcitylimos.com)
3. Update DNS records:
   - A record: Points to hosting provider's IP
   - CNAME record: www → main domain
4. Enable SSL (automatic on all platforms)

## Post-Deployment Checklist

- [ ] Visit your live site
- [ ] Test all navigation links
- [ ] Verify booking portal works
- [ ] Check mobile responsiveness
- [ ] Test page load speed with Lighthouse
- [ ] Verify sitemap at `/sitemap-index.xml`
- [ ] Submit sitemap to Google Search Console
- [ ] Check Open Graph tags (share on social media)
- [ ] Test forms (if any)

## Performance Monitoring

### Google Search Console
1. Add your property
2. Submit sitemap: `https://yourdomain.com/sitemap-index.xml`
3. Monitor indexing and performance

### Google Analytics (if needed)
Add to `/src/layouts/BaseLayout.astro` in `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## SSL Certificate
All recommended hosting providers (Vercel, Netlify, Cloudflare) provide **free automatic SSL** via Let's Encrypt.

## CDN & Caching
All recommended platforms include global CDN by default:
- **Vercel**: Edge Network (140+ locations)
- **Netlify**: Global CDN
- **Cloudflare**: 200+ global data centers

## Cost
- **Vercel/Netlify/Cloudflare**: FREE for most sites
- **AWS S3 + CloudFront**: ~$1-5/month for typical traffic

## Support
- Astro Docs: https://docs.astro.build
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com

## Environment Variables (If Needed)
Create `.env` file:
```
PUBLIC_SITE_URL=https://emeraldcitylimos.com
```

Access in code:
```javascript
import.meta.env.PUBLIC_SITE_URL
```

## Continuous Deployment
Connect your Git repository to automatically deploy on every push:
- Push to `main` branch → Production
- Push to `develop` branch → Preview deployment

🎉 **Your Emerald City Limos Astro site is ready to deploy!**