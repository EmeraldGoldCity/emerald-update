# Image Organization Guide for Emerald City Limos

## 📁 Folder Structure

```
public/images/
├── hero/
│   ├── seattle-skyline.webp (1920x1080, optimized)
│   ├── seattle-skyline.jpg (1920x1080, fallback)
│   ├── luxury-limo-hero.webp
│   └── luxury-limo-hero.jpg
├── services/
│   ├── airport-transfer.webp (800x533)
│   ├── airport-transfer.jpg
│   ├── wedding-limo.webp (800x533)
│   ├── wedding-limo.jpg
│   ├── corporate-transport.webp (800x533)
│   ├── corporate-transport.jpg
│   ├── game-day.webp
│   ├── game-day.jpg
│   ├── cruise-terminal.webp
│   └── cruise-terminal.jpg
├── fleet/
│   ├── cadillac-escalade.webp (800x533)
│   ├── cadillac-escalade.jpg
│   ├── mercedes-s-class.webp (800x533)
│   ├── mercedes-s-class.jpg
│   ├── mercedes-sprinter-14.webp (800x533)
│   ├── mercedes-sprinter-14.jpg
│   ├── sprinter-van-9.webp
│   ├── sprinter-van-9.jpg
│   ├── party-bus.webp
│   └── party-bus.jpg
├── locations/
│   ├── king-county.webp (600x400)
│   ├── king-county.jpg
│   ├── snohomish-county.webp (600x400)
│   ├── snohomish-county.jpg
│   ├── pierce-county.webp (600x400)
│   ├── pierce-county.jpg
│   ├── seattle-downtown.webp
│   ├── bellevue.webp
│   └── tacoma.webp
├── blog/
│   ├── airport-guide.webp (1080x720)
│   ├── corporate-travel.webp
│   └── wedding-tips.webp
└── icons/
    ├── logo.svg
    ├── favicon-32x32.png
    └── apple-touch-icon.png
```

---

## 📸 Image Optimization Guidelines

### **Recommended Sizes:**

| Use Case | Dimensions | WebP Quality | JPG Quality | File Size Target |
|----------|-----------|--------------|-------------|------------------|
| **Hero/Background** | 1920x1080 | 85% | 80% | 35-50 KB (WebP) |
| **Service Cards** | 800x533 | 75% | 75% | 15-25 KB (WebP) |
| **Location Cards** | 600x400 | 75% | 75% | 10-20 KB (WebP) |
| **Fleet Images** | 800x533 | 80% | 75% | 20-30 KB (WebP) |
| **Blog Headers** | 1080x720 | 80% | 75% | 25-35 KB (WebP) |

---

## 🛠️ How to Download & Optimize Images

### **Step 1: Download from Unsplash**
Visit each Unsplash URL from your current codebase and download at the proper size.

### **Step 2: Optimize with Online Tools**

**Option A: Squoosh (Best Free Tool)**
1. Go to https://squoosh.app
2. Upload your JPG
3. Set right panel to **WebP**, Quality: **75-85%**
4. Download optimized `.webp` file
5. Keep original `.jpg` as fallback

**Option B: TinyPNG**
1. Go to https://tinypng.com
2. Upload JPG/PNG files
3. Download compressed versions

**Option C: ImageOptim (Mac)**
1. Download ImageOptim app
2. Drag images into the app
3. Automatically optimizes

**Option D: Command Line (Advanced)**
```bash
# Install cwebp (WebP converter)
brew install webp  # Mac
sudo apt-get install webp  # Linux

# Convert to WebP
cwebp -q 80 input.jpg -o output.webp

# Batch convert all JPGs in a folder
for file in *.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

---

## 🎯 Current Unsplash URLs to Download

### **Hero Images:**
- https://images.unsplash.com/photo-1765739100215-8f340e4ac5c1 → `hero/luxury-limo-hero.webp`
- https://images.unsplash.com/photo-1549317661-bd32c8ce0db2 → `hero/seattle-skyline.webp`

### **Fleet Images:**
- https://images.unsplash.com/photo-1768024175218-5878b8880eab → `fleet/cadillac-escalade.webp`
- https://images.unsplash.com/photo-1763789381416-7b94c5f97560 → `fleet/mercedes-s-class.webp`
- https://images.unsplash.com/photo-1554050767-0c512ab917ff → `fleet/mercedes-sprinter.webp`
- https://images.unsplash.com/photo-1720325835679-29fbefe864ba → `fleet/party-bus.webp`

### **Service Images:**
- https://images.unsplash.com/photo-1436491865332-7a61a109cc05 → `services/airport-transfer.webp`
- https://images.unsplash.com/photo-1507309270028-9121e9937409 → `services/wedding-limo.webp`
- https://images.unsplash.com/photo-1551958219-acbc608c6377 → `services/game-day.webp`

### **Location Images:**
- https://images.unsplash.com/photo-1506146332389-18140dc7b2fb → `locations/king-county.webp`
- https://images.unsplash.com/photo-1518093661910-c9fd25c8a4de → `locations/seattle-downtown.webp`

---

## 🚀 Using OptimizedImage Component

```tsx
import OptimizedImage from '@/app/components/OptimizedImage';

// Above-the-fold (priority)
<OptimizedImage
  src="/images/hero/seattle-skyline.jpg"
  alt="Seattle Skyline - Emerald City Limos Premium Black Car Service"
  width={1920}
  height={1080}
  priority={true}
  className="w-full h-full object-cover"
/>

// Below-the-fold (lazy load)
<OptimizedImage
  src="/images/services/airport-transfer.jpg"
  alt="Seattle Airport Transfer Service - Sea-Tac Limousine"
  width={800}
  height={533}
  priority={false}
  className="rounded-lg shadow-xl"
/>
```

---

## ✅ Benefits of This Approach

1. **70-80% smaller file sizes** (WebP vs JPG)
2. **Automatic fallback** for older browsers
3. **No CLS** (Cumulative Layout Shift) with proper width/height
4. **Lazy loading** for below-fold images
5. **Priority loading** for above-fold images
6. **Lighthouse score: 95+**

---

## 🎯 Next Steps

1. Download images from Unsplash URLs above
2. Optimize using Squoosh or cwebp
3. Place in proper folders under `/public/images/`
4. Update components to use `<OptimizedImage>` instead of `<img>`
5. Test locally to verify images load correctly
6. Deploy and check Lighthouse scores

**Note:** Once images are local, you can delete all Unsplash URLs from your code!
