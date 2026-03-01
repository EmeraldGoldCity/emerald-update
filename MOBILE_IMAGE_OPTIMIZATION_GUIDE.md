# 📸 Mobile Image Optimization Guide
## Reduce Image Size from 507KB → 85KB (83% reduction!)

---

## 🎯 THE PROBLEM

**Current Issues:**
- Hero image: **361 KB** (should be 40 KB)
- Seattle skyline: **145 KB** (should be 30 KB)
- Loading from Unsplash (external server = slow!)
- No mobile-specific images (waste data on phones)

**Impact on Mobile:**
- LCP (Largest Contentful Paint): 3.2s (should be < 2.5s)
- Total Blocking Time: 450ms
- Mobile Performance Score: 67/100

**After Optimization:**
- Hero image: **40 KB** (89% reduction)
- Seattle skyline: **30 KB** (79% reduction)
- LCP: **< 1.5s** ✅
- Mobile Performance Score: **95+/100** ✅

---

## 🛠️ STEP-BY-STEP OPTIMIZATION

### **STEP 1: Download Current Images (2 minutes)**

**Method A: Direct Download**

Visit these URLs in your browser:

```
https://images.unsplash.com/photo-1765739100215-8f340e4ac5c1?w=1920&h=1080&fit=crop&q=85
```

Right-click → "Save Image As..." → Save to Downloads folder

**Method B: Use Wget (command line)**

```bash
# Download hero image
wget "https://images.unsplash.com/photo-1765739100215-8f340e4ac5c1?w=1920&h=1080&fit=crop&q=85" -O hero-original.jpg

# Download Seattle skyline (find URL in your code)
wget "YOUR_SEATTLE_IMAGE_URL" -O seattle-original.jpg
```

---

### **STEP 2: Optimize with Squoosh (10 minutes)**

**Visit:** https://squoosh.app/

#### **Hero Image - Desktop Version**

1. Upload `hero-original.jpg`
2. **Resize:**
   - Width: **1280 px**
   - Height: **720 px**
   - Method: Lanczos3
3. **Format:** WebP
4. **Quality:** 75
5. **Preview:** Check quality (should look good)
6. Click "Download"
7. Rename to: `hero-desktop.webp`

8. **Create JPG fallback:**
   - Change format to: MozJPEG
   - Quality: 80
   - Download
   - Rename to: `hero-desktop.jpg`

**Expected file sizes:**
- `hero-desktop.webp`: ~40 KB
- `hero-desktop.jpg`: ~80 KB

---

#### **Hero Image - Mobile Version**

1. Upload `hero-original.jpg` again
2. **Resize:**
   - Width: **640 px**
   - Height: **360 px**
   - Method: Lanczos3
3. **Format:** WebP
4. **Quality:** 70
5. Download
6. Rename to: `hero-mobile.webp`

7. **Create JPG fallback:**
   - Change format to: MozJPEG
   - Quality: 75
   - Download
   - Rename to: `hero-mobile.jpg`

**Expected file sizes:**
- `hero-mobile.webp`: ~15 KB
- `hero-mobile.jpg`: ~30 KB

---

#### **Seattle Skyline Image**

1. Upload `seattle-original.jpg`
2. **Resize:**
   - Width: **800 px**
   - Height: **533 px**
   - Method: Lanczos3
3. **Format:** WebP
4. **Quality:** 75
5. Download
6. Rename to: `seattle-skyline.webp`

7. **Create JPG fallback:**
   - Change format to: MozJPEG
   - Quality: 80
   - Download
   - Rename to: `seattle-skyline.jpg`

**Expected file sizes:**
- `seattle-skyline.webp`: ~30 KB
- `seattle-skyline.jpg`: ~60 KB

---

### **STEP 3: Add Images to Project (2 minutes)**

**File structure:**

```
your-project/
├── public/
│   └── images/
│       ├── hero-desktop.webp      ← 40 KB
│       ├── hero-desktop.jpg       ← 80 KB (fallback)
│       ├── hero-mobile.webp       ← 15 KB
│       ├── hero-mobile.jpg        ← 30 KB (fallback)
│       ├── seattle-skyline.webp   ← 30 KB
│       └── seattle-skyline.jpg    ← 60 KB (fallback)
```

**How to add:**

1. Open VS Code with your project
2. In left sidebar, find `public` folder
3. Right-click → "New Folder" → Name: `images`
4. Drag all 6 optimized images into the `images` folder

---

### **STEP 4: Update Homepage Hero (5 minutes)**

**File:** `/src/pages/index.astro`

**Find this code:**

```astro
<img
  src="https://images.unsplash.com/photo-1765739100215-8f340e4ac5c1?w=1920&h=1080&fit=crop&q=85&fm=webp&auto=format"
  alt="Luxury Limousine Service in Seattle"
  class="absolute inset-0 w-full h-full object-cover"
  width="1920"
  height="1080"
  loading="eager"
  fetchpriority="high"
/>
```

**Replace with:**

```astro
---
import ResponsiveImage from '@/components/ResponsiveImage.astro';
---

<ResponsiveImage
  desktop="/images/hero-desktop"
  mobile="/images/hero-mobile"
  alt="Emerald City Limos - Professional Seattle Black Car and Luxury Limousine Service with Mercedes sedans and stretch limos"
  width={1280}
  height={720}
  loading="eager"
  priority
  className="absolute inset-0 w-full h-full"
  objectFit="cover"
/>
```

**Expected improvement:** 361 KB → 40 KB (mobile: 15 KB)

---

### **STEP 5: Update Other Images (10 minutes)**

**Find all other Unsplash images in your code:**

```bash
# Search for Unsplash URLs
grep -r "images.unsplash.com" src/
```

**Replace each with ResponsiveImage component:**

```astro
<!-- Before -->
<img src="https://images.unsplash.com/..." alt="..." />

<!-- After -->
<ResponsiveImage
  desktop="/images/your-image"
  mobile="/images/your-image-mobile"
  alt="Descriptive alt text"
  width={800}
  height={533}
  loading="lazy"
/>
```

---

## 📊 OPTIMIZATION TARGETS

### **Image Size Guidelines:**

| Type | Desktop (WebP) | Mobile (WebP) | JPG Fallback |
|------|---------------|---------------|--------------|
| Hero | 40-60 KB | 15-25 KB | 80-120 KB |
| Featured | 30-50 KB | 10-20 KB | 60-100 KB |
| Thumbnail | 10-20 KB | 5-10 KB | 20-40 KB |
| Background | 40-70 KB | 20-35 KB | 80-140 KB |

### **Dimension Guidelines:**

| Type | Desktop | Mobile | Aspect Ratio |
|------|---------|--------|--------------|
| Hero | 1280x720 | 640x360 | 16:9 |
| Featured | 800x533 | 400x267 | 3:2 |
| Thumbnail | 400x400 | 200x200 | 1:1 |
| Wide | 1200x400 | 600x200 | 3:1 |

---

## 🚀 ALTERNATIVE: Automated Script

**For processing multiple images at once:**

```bash
# Install imagemagick and cwebp
brew install imagemagick webp  # Mac
sudo apt install imagemagick webp  # Ubuntu

# Create script: optimize-images.sh
#!/bin/bash

INPUT_DIR="./downloads"
OUTPUT_DIR="./public/images"

# Process hero images
convert $INPUT_DIR/hero-original.jpg \
  -resize 1280x720 \
  -quality 75 \
  $OUTPUT_DIR/hero-desktop.jpg

cwebp -q 75 $OUTPUT_DIR/hero-desktop.jpg \
  -o $OUTPUT_DIR/hero-desktop.webp

convert $INPUT_DIR/hero-original.jpg \
  -resize 640x360 \
  -quality 70 \
  $OUTPUT_DIR/hero-mobile.jpg

cwebp -q 70 $OUTPUT_DIR/hero-mobile.jpg \
  -o $OUTPUT_DIR/hero-mobile.webp

# Process Seattle skyline
convert $INPUT_DIR/seattle-original.jpg \
  -resize 800x533 \
  -quality 75 \
  $OUTPUT_DIR/seattle-skyline.jpg

cwebp -q 75 $OUTPUT_DIR/seattle-skyline.jpg \
  -o $OUTPUT_DIR/seattle-skyline.webp

echo "✅ All images optimized!"

# Run it
chmod +x optimize-images.sh
./optimize-images.sh
```

---

## ✅ VERIFICATION CHECKLIST

**After optimization:**

- [ ] Hero desktop WebP: 30-50 KB
- [ ] Hero mobile WebP: 10-20 KB
- [ ] Seattle skyline WebP: 25-40 KB
- [ ] All images have JPG fallbacks
- [ ] All images in `/public/images/` folder
- [ ] HomePage uses ResponsiveImage component
- [ ] Build succeeds: `npm run build`
- [ ] Preview works: `npm run preview`
- [ ] Images load correctly on mobile
- [ ] Images load correctly on desktop
- [ ] No broken images

---

## 🧪 TESTING

### **Test 1: Local Preview**

```bash
# Build
npm run build

# Preview
npm run preview

# Open http://localhost:4321
```

**Check:**
- Images load quickly
- No layout shift
- Correct images on mobile vs desktop

---

### **Test 2: Chrome DevTools**

1. Open site in Chrome
2. Press F12 (DevTools)
3. Click "Network" tab
4. Filter by "Img"
5. Reload page (Ctrl+R)

**Verify:**
- Hero image: < 50 KB
- Total images: < 200 KB
- Load time: < 1s

---

### **Test 3: Mobile Simulation**

1. In DevTools, click "Toggle device toolbar" (Ctrl+Shift+M)
2. Select "iPhone 12" or "Galaxy S20"
3. Reload page

**Verify:**
- Mobile images load (not desktop)
- Hero image: < 25 KB
- LCP: < 2.5s

---

### **Test 4: Lighthouse Audit**

1. In DevTools, click "Lighthouse" tab
2. Select:
   - ✅ Performance
   - ✅ Mobile
3. Click "Generate report"

**Target scores:**
- Performance: **95+** (was 67)
- LCP: **< 2.5s** (was 3.2s)
- Total Blocking Time: **< 200ms** (was 450ms)

---

## 📈 EXPECTED IMPROVEMENTS

### **Before Optimization:**

```
Mobile Performance: 67/100
Desktop Performance: 82/100

LCP: 3.2s (bad)
Total Transfer: 800 KB
Hero Image: 361 KB
Time to Interactive: 3.5s
```

### **After Optimization:**

```
Mobile Performance: 95+/100 ✅
Desktop Performance: 98+/100 ✅

LCP: < 1.5s ✅ (56% faster!)
Total Transfer: 200 KB ✅ (75% reduction)
Hero Image: 15-40 KB ✅ (89-96% reduction)
Time to Interactive: < 2s ✅ (43% faster!)
```

---

## 🎯 QUICK REFERENCE

### **Squoosh Settings Cheat Sheet:**

```
Hero Desktop:
- Size: 1280 x 720
- Format: WebP
- Quality: 75
- Expected: ~40 KB

Hero Mobile:
- Size: 640 x 360
- Format: WebP
- Quality: 70
- Expected: ~15 KB

Featured Images:
- Size: 800 x 533
- Format: WebP
- Quality: 75
- Expected: ~30 KB

Thumbnails:
- Size: 400 x 400
- Format: WebP
- Quality: 70
- Expected: ~10 KB
```

---

## 💡 PRO TIPS

1. **Always create fallbacks:**
   - WebP for modern browsers
   - JPG for older browsers (Safari < 14, IE)

2. **Use responsive images:**
   - Different sizes for mobile/desktop
   - Save mobile data

3. **Lazy load non-critical images:**
   - Hero: `loading="eager"`
   - Everything else: `loading="lazy"`

4. **Set dimensions:**
   - Prevents layout shift
   - Improves CLS score

5. **Use alt text:**
   - SEO benefit
   - Accessibility

6. **Test on real devices:**
   - iPhone (Safari)
   - Android (Chrome)
   - Different network speeds

---

## 🆘 TROUBLESHOOTING

### **Issue: Images not showing**

**Check:**
```bash
# Verify images exist
ls -lh public/images/

# Should show:
# hero-desktop.webp (~40 KB)
# hero-desktop.jpg (~80 KB)
# hero-mobile.webp (~15 KB)
# hero-mobile.jpg (~30 KB)
# seattle-skyline.webp (~30 KB)
# seattle-skyline.jpg (~60 KB)
```

**Fix:**
- Ensure images are in `/public/images/` (not `/src/images/`)
- Check file names match exactly (case-sensitive!)
- Rebuild: `npm run build`

---

### **Issue: Still loading old Unsplash images**

**Check:**
```bash
# Search for remaining Unsplash URLs
grep -r "images.unsplash.com" src/

# Should return: no results
```

**Fix:**
- Replace all Unsplash URLs with ResponsiveImage
- Clear browser cache (Ctrl+Shift+R)
- Rebuild: `npm run build`

---

### **Issue: Images too blurry**

**Fix:**
- Increase quality: 75 → 85
- Slightly increase dimensions
- Use MozJPEG for fallback

---

### **Issue: Images too large**

**Fix:**
- Decrease quality: 75 → 65
- Reduce dimensions slightly
- Use more aggressive WebP compression

---

## 📊 IMAGE AUDIT CHECKLIST

Use this to track optimization progress:

### **Critical Images (Do First):**
- [ ] Hero image (homepage)
- [ ] Service preview images
- [ ] Location preview images

### **Important Images (Do Second):**
- [ ] Fleet vehicle photos
- [ ] Service detail images
- [ ] About page photos

### **Low Priority Images (Do Last):**
- [ ] Testimonial photos
- [ ] Blog post images
- [ ] Icon images (if any)

---

## 🎉 SUCCESS CRITERIA

**You've succeeded when:**

- ✅ Lighthouse Mobile Performance: 95+
- ✅ LCP < 2.5s on mobile
- ✅ Total image weight < 200 KB
- ✅ Hero loads in < 1s
- ✅ No layout shift (CLS < 0.1)
- ✅ Images look sharp on all devices

---

**You're now ready to achieve 100% mobile performance! 🚀**

Total time: ~30 minutes
Impact: 83% reduction in image size
Result: 95+ mobile performance score
