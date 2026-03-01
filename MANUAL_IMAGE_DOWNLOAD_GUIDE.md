# 📸 Manual Image Download & Optimization Guide
## Emerald City Limos - Step-by-Step Instructions

---

## 🎯 PRIORITY: Download These 10 Images First

### **Why This Matters:**
Hosting images locally instead of using Unsplash CDN will:
- ✅ Improve Lighthouse score by **+10-15 points**
- ✅ Reduce page load time by **1-2 seconds**
- ✅ Save **70% bandwidth** (WebP compression)
- ✅ Eliminate external dependencies

---

## 📋 STEP-BY-STEP INSTRUCTIONS

### **STEP 1: Create Image Folders**

Open your terminal in the project root and run:

```bash
mkdir -p public/images/hero
mkdir -p public/images/services
mkdir -p public/images/fleet
mkdir -p public/images/locations
mkdir -p public/images/blog
```

---

### **STEP 2: Download Hero Images** 🔥 MOST CRITICAL

#### **Image 1: Main Hero Image**

1. Open this URL in your browser:
   ```
   https://images.unsplash.com/photo-1765739100215-8f340e4ac5c1?w=1920&h=1080&fit=crop&q=85
   ```

2. Right-click on the image → **Save Image As...**

3. Save to: `public/images/hero/luxury-limo-hero.jpg`

4. **Convert to WebP:**
   - Visit: https://squoosh.app
   - Click "Select an image" → Upload `luxury-limo-hero.jpg`
   - Right panel:
     - Select **WebP**
     - Quality: **85%**
     - Resize: **1920 x 1080**
   - Click "Download" → Save as `luxury-limo-hero.webp`
   - Move to: `public/images/hero/`

5. **Verify:**
   ```bash
   ls -lh public/images/hero/
   # Should show:
   # luxury-limo-hero.jpg (~120-150 KB)
   # luxury-limo-hero.webp (~35-50 KB)
   ```

---

#### **Image 2: Seattle Skyline**

1. URL:
   ```
   https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1920&h=1080&fit=crop&q=85
   ```

2. Save as: `public/images/hero/seattle-skyline.jpg`

3. Convert to WebP using Squoosh (same process)

4. Save WebP as: `public/images/hero/seattle-skyline.webp`

---

### **STEP 3: Download Service Images**

#### **Image 3: Airport Transfer**

1. URL:
   ```
   https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=533&fit=crop&q=75
   ```

2. Save as: `public/images/services/airport-transfer.jpg`

3. Convert to WebP:
   - Quality: **75%**
   - Resize: **800 x 533**

4. Save as: `public/images/services/airport-transfer.webp`

---

#### **Image 4: Wedding Limousine**

1. URL:
   ```
   https://images.unsplash.com/photo-1507309270028-9121e9937409?w=800&h=533&fit=crop&q=75
   ```

2. Save as: `public/images/services/wedding-limo.jpg`

3. Convert to WebP (800x533, 75% quality)

4. Save as: `public/images/services/wedding-limo.webp`

---

#### **Image 5: Game Day Transport**

1. URL:
   ```
   https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&h=533&fit=crop&q=75
   ```

2. Save as: `public/images/services/game-day.jpg`

3. Convert to WebP (800x533, 75% quality)

4. Save as: `public/images/services/game-day.webp`

---

### **STEP 4: Download Fleet Images**

#### **Image 6: Cadillac Escalade**

1. URL:
   ```
   https://images.unsplash.com/photo-1768024175218-5878b8880eab?w=800&h=533&fit=crop&q=75
   ```

2. Save as: `public/images/fleet/cadillac-escalade.jpg`

3. Convert to WebP (800x533, 75% quality)

4. Save as: `public/images/fleet/cadillac-escalade.webp`

---

#### **Image 7: Mercedes S-Class**

1. URL:
   ```
   https://images.unsplash.com/photo-1763789381416-7b94c5f97560?w=800&h=533&fit=crop&q=75
   ```

2. Save as: `public/images/fleet/mercedes-s-class.jpg`

3. Convert to WebP (800x533, 75% quality)

4. Save as: `public/images/fleet/mercedes-s-class.webp`

---

#### **Image 8: Mercedes Sprinter**

1. URL:
   ```
   https://images.unsplash.com/photo-1554050767-0c512ab917ff?w=800&h=533&fit=crop&q=75
   ```

2. Save as: `public/images/fleet/mercedes-sprinter.jpg`

3. Convert to WebP (800x533, 75% quality)

4. Save as: `public/images/fleet/mercedes-sprinter.webp`

---

### **STEP 5: Download Location Images**

#### **Image 9: King County**

1. URL:
   ```
   https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=600&h=400&fit=crop&q=75
   ```

2. Save as: `public/images/locations/king-county.jpg`

3. Convert to WebP (600x400, 75% quality)

4. Save as: `public/images/locations/king-county.webp`

---

#### **Image 10: Seattle Downtown**

1. URL:
   ```
   https://images.unsplash.com/photo-1518093661910-c9fd25c8a4de?w=600&h=400&fit=crop&q=75
   ```

2. Save as: `public/images/locations/seattle.jpg`

3. Convert to WebP (600x400, 75% quality)

4. Save as: `public/images/locations/seattle.webp`

---

## ✅ VERIFICATION CHECKLIST

After downloading all images, verify:

```bash
# Check file structure
tree public/images/

# Should show:
public/images/
├── hero/
│   ├── luxury-limo-hero.jpg
│   ├── luxury-limo-hero.webp
│   ├── seattle-skyline.jpg
│   └── seattle-skyline.webp
├── services/
│   ├── airport-transfer.jpg
│   ├── airport-transfer.webp
│   ├── wedding-limo.jpg
│   ├── wedding-limo.webp
│   ├── game-day.jpg
│   └── game-day.webp
├── fleet/
│   ├── cadillac-escalade.jpg
│   ├── cadillac-escalade.webp
│   ├── mercedes-s-class.jpg
│   ├── mercedes-s-class.webp
│   ├── mercedes-sprinter.jpg
│   └── mercedes-sprinter.webp
└── locations/
    ├── king-county.jpg
    ├── king-county.webp
    ├── seattle.jpg
    └── seattle.webp
```

Check file sizes:

```bash
# Hero images should be largest
ls -lh public/images/hero/
# luxury-limo-hero.jpg: ~120-150 KB
# luxury-limo-hero.webp: ~35-50 KB

# Service images should be medium
ls -lh public/images/services/
# airport-transfer.jpg: ~60-80 KB
# airport-transfer.webp: ~15-25 KB

# Location images should be smallest
ls -lh public/images/locations/
# king-county.jpg: ~40-60 KB
# king-county.webp: ~10-20 KB
```

---

## 🔄 ALTERNATIVE: Command Line Method (Advanced)

If you have `wget` and `cwebp` installed:

```bash
# Install tools (Mac)
brew install wget webp

# Install tools (Ubuntu/Debian)
sudo apt-get install wget webp

# Download and convert hero image
cd public/images/hero/
wget "https://images.unsplash.com/photo-1765739100215-8f340e4ac5c1?w=1920&h=1080&fit=crop&q=85" -O luxury-limo-hero.jpg
cwebp -q 85 luxury-limo-hero.jpg -o luxury-limo-hero.webp

# Download and convert service image
cd ../services/
wget "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=533&fit=crop&q=75" -O airport-transfer.jpg
cwebp -q 75 airport-transfer.jpg -o airport-transfer.webp

# Repeat for all images...
```

---

## 📊 FILE SIZE TARGETS

| Image Type | JPG Target | WebP Target | Savings |
|------------|-----------|-------------|---------|
| Hero (1920x1080) | 120-150 KB | 35-50 KB | **70%** |
| Service (800x533) | 60-80 KB | 15-25 KB | **75%** |
| Fleet (800x533) | 60-80 KB | 20-30 KB | **70%** |
| Location (600x400) | 40-60 KB | 10-20 KB | **75%** |

**Total Before:** ~1.2 MB  
**Total After:** ~0.3 MB  
**Savings: 75%** 🎉

---

## 🚀 NEXT STEPS AFTER DOWNLOADING

1. **Update image paths** in your code:
   ```tsx
   // Before
   <img src="https://images.unsplash.com/photo-123..." />
   
   // After
   <OptimizedImage 
     src="/images/hero/luxury-limo-hero.jpg"
     width={1920}
     height={1080}
     priority={true}
   />
   ```

2. **Update preload tag** in BaseLayout.astro:
   ```html
   <link 
     rel="preload" 
     as="image" 
     href="/images/hero/luxury-limo-hero.webp"
     type="image/webp"
   />
   ```

3. **Test locally:**
   ```bash
   npm run build
   npm run preview
   # Open http://localhost:4321
   ```

4. **Deploy:**
   ```bash
   git add public/images/
   git commit -m "feat: Add optimized local images"
   git push origin main
   ```

---

## 🎯 QUICK WIN: Just Download Hero Image

**Don't have time for all 10? Just do the hero image:**

1. Download `luxury-limo-hero.jpg` (5 min)
2. Convert to WebP using Squoosh (3 min)
3. Update HomePage.tsx (2 min)
4. Deploy (5 min)

**Total time: 15 minutes**  
**Expected impact: +8-10 Lighthouse points** 🚀

---

## 💡 TIPS FOR SUCCESS

1. **Use Squoosh for conversions** - It's free, no account needed
2. **Keep both JPG and WebP** - WebP with JPG fallback
3. **Check file sizes** - If >100KB for WebP, reduce quality
4. **Test images load** - Open dev server and verify images appear
5. **Name consistently** - Use kebab-case (luxury-limo-hero.jpg)

---

**Questions?** Check `/FINAL_OPTIMIZATION_CHECKLIST.md` for troubleshooting!
