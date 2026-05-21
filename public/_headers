# Cache static assets for 1 year (immutable)
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable

# Cache WebP images
/*.webp
  Cache-Control: public, max-age=31536000, immutable
  Content-Type: image/webp

# Cache JPG/PNG images
/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

# Cache JS/CSS bundles
/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

# HTML pages - revalidate on every request
/*.html
  Cache-Control: public, max-age=0, must-revalidate

# Root index
/
  Cache-Control: public, max-age=0, must-revalidate

# Security headers for all pages
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
