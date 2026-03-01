# ⚡ Quick Commands Reference
## Emerald City Limos Performance Optimization

---

## 🚀 BUILD & DEPLOY

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Build with bundle analyzer
ANALYZE=true npm run build

# Clean build (if errors)
npm run clean
rm -rf node_modules/.vite
npm install
npm run build
```

---

## 📊 TESTING

```bash
# Run Astro type checking
npm run check

# Fast build (skip type check)
npm run build:fast

# Check bundle sizes
ls -lh dist/_astro/*.js

# Check compression
ls -lh dist/_astro/*.{gz,br}

# Verify image optimization
ls -lh public/images/**/*.{jpg,webp}
```

---

## 🖼️ IMAGE OPTIMIZATION

```bash
# Install WebP tools (Mac)
brew install webp

# Install WebP tools (Linux)
sudo apt-get install webp

# Convert single image to WebP
cwebp -q 85 input.jpg -o output.webp

# Batch convert all JPGs in a folder
for file in *.jpg; do
  cwebp -q 75 "$file" -o "${file%.jpg}.webp"
done

# Check image sizes
du -sh public/images/*
```

---

## 🔍 LIGHTHOUSE TESTING

```bash
# Open Chrome DevTools
# F12 → Lighthouse tab → Generate Report

# Or use CLI (install first):
npm install -g lighthouse

# Run Lighthouse from terminal
lighthouse https://emeraldcitylimos.com/ --view

# Mobile test
lighthouse https://emeraldcitylimos.com/ --preset=mobile --view

# Desktop test
lighthouse https://emeraldcitylimos.com/ --preset=desktop --view
```

---

## 🌐 DEPLOYMENT

```bash
# Commit changes
git add .
git commit -m "perf: Optimize images and add code splitting"

# Push to deploy (Vercel/Netlify auto-deploys)
git push origin main

# Check deployment status (Vercel)
npx vercel --prod

# Check deployment status (Netlify)
npx netlify deploy --prod
```

---

## 🧪 PERFORMANCE CHECKS

```bash
# Check Brotli compression
curl -H "Accept-Encoding: br" -I https://emeraldcitylimos.com/ | grep -i content-encoding

# Check cache headers
curl -I https://emeraldcitylimos.com/_astro/index-abc123.js | grep -i cache-control

# Check page load time
curl -o /dev/null -s -w "Time: %{time_total}s\n" https://emeraldcitylimos.com/

# Check image optimization
curl -I https://emeraldcitylimos.com/images/hero/luxury-limo-hero.webp
```

---

## 📦 BUNDLE ANALYSIS

```bash
# Analyze bundle size
ANALYZE=true npm run build
# Opens browser with visualization

# Check what's in the bundle
npx vite-bundle-visualizer

# Find duplicate dependencies
npm ls | grep -i duplicate
```

---

## 🔧 TROUBLESHOOTING

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Clear Astro cache
rm -rf .astro

# Clear dist folder
rm -rf dist

# Fresh install
rm -rf node_modules
rm -f package-lock.json
npm install

# Verify Node version
node --version
# Should be 18.x or higher

# Verify npm version
npm --version
# Should be 9.x or higher
```

---

## 📁 FILE STRUCTURE

```bash
# View project structure
tree -L 3 -I 'node_modules|dist|.git'

# Check image folders
ls -R public/images/

# Check component files
ls -la src/app/components/

# Check page files
ls -la src/app/pages/
ls -la src/pages/
```

---

## 🎯 QUICK HEALTH CHECK

```bash
# Run all checks at once
npm run check && \
npm run build && \
npm run preview &

# Wait 10 seconds, then test
sleep 10 && curl -I http://localhost:4321/

# Check for errors
# Should see: HTTP/1.1 200 OK
```

---

## 💡 ONE-LINERS

```bash
# Total bundle size
du -sh dist/

# Count JavaScript files
find dist -name "*.js" | wc -l

# Find large files (>100KB)
find dist -type f -size +100k -exec ls -lh {} \;

# Check WebP images exist
find public/images -name "*.webp" | wc -l

# Verify all images have WebP versions
find public/images -name "*.jpg" -o -name "*.png" | while read img; do
  webp="${img%.*}.webp"
  [ -f "$webp" ] || echo "Missing: $webp"
done
```

---

## 🚨 EMERGENCY FIXES

```bash
# Site not loading?
npm run build && npm run preview

# Build failing?
npm run clean
rm -rf node_modules
npm install
npm run build

# Images not showing?
ls -la public/images/
# Verify paths are correct

# Lighthouse score dropped?
# Clear browser cache: Ctrl+Shift+R
# Test in Incognito mode
# Check if using production build

# Vercel deploy failed?
# Check build logs
# Verify vercel.json is valid JSON
# Check if all dependencies installed
```

---

## 📊 BEFORE/AFTER COMPARISON

```bash
# Before optimization
npm run build
du -sh dist/
# ~2.5 MB

# After optimization (expected)
npm run build
du -sh dist/
# ~800 KB - 1.2 MB

# Savings: 60-70% 🎉
```

---

## 🎯 DAILY WORKFLOW

```bash
# Morning: Start dev server
npm run dev

# Make changes...

# Before commit: Test build
npm run build
npm run preview

# If all good: Deploy
git add .
git commit -m "fix: Update hero image"
git push origin main

# Wait 3 minutes, then test
lighthouse https://emeraldcitylimos.com/ --view
```

---

## 📱 MOBILE TESTING

```bash
# Test mobile performance
lighthouse https://emeraldcitylimos.com/ \
  --preset=mobile \
  --throttling-method=devtools \
  --view

# Emulate slow 3G
lighthouse https://emeraldcitylimos.com/ \
  --throttling.rttMs=300 \
  --throttling.throughputKbps=700 \
  --throttling.cpuSlowdownMultiplier=4 \
  --view
```

---

## 🔗 USEFUL URLs

```bash
# PageSpeed Insights
open "https://pagespeed.web.dev/analysis?url=https://emeraldcitylimos.com"

# GTmetrix
open "https://gtmetrix.com/?url=https://emeraldcitylimos.com"

# WebPageTest
open "https://www.webpagetest.org/?url=https://emeraldcitylimos.com"

# Squoosh (image optimizer)
open "https://squoosh.app"

# Bundle analyzer
ANALYZE=true npm run build
# Opens automatically
```

---

## ✅ PRODUCTION CHECKLIST

```bash
# 1. Build succeeds
npm run build && echo "✅ Build OK" || echo "❌ Build FAILED"

# 2. No console errors
npm run preview
# Open browser, check F12 console

# 3. All images load
curl -I https://emeraldcitylimos.com/images/hero/luxury-limo-hero.webp | grep "200 OK"

# 4. Compression enabled
curl -H "Accept-Encoding: br" -I https://emeraldcitylimos.com/ | grep "br"

# 5. Cache headers set
curl -I https://emeraldcitylimos.com/_astro/index-abc123.js | grep "max-age=31536000"

# All green? Deploy! 🚀
git push origin main
```

---

**Pro Tip:** Save these commands in a `Makefile` or `package.json` scripts for quick access! 

Example `package.json` addition:
```json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build",
    "lighthouse": "lighthouse https://emeraldcitylimos.com/ --view",
    "test:mobile": "lighthouse https://emeraldcitylimos.com/ --preset=mobile --view"
  }
}
```
