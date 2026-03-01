import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

/**
 * OptimizedImage Component
 * 
 * Features:
 * - WebP format with automatic fallback
 * - Proper width/height to prevent CLS
 * - Lazy loading for below-fold images
 * - Priority loading for above-fold images
 * - Error handling with fallback
 * 
 * Usage:
 * <OptimizedImage
 *   src="/images/hero/seattle-skyline.jpg"
 *   alt="Seattle Skyline - Emerald City Limos"
 *   width={1920}
 *   height={1080}
 *   priority={true}
 *   className="w-full h-full object-cover"
 * />
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  objectFit = 'cover'
}: OptimizedImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Convert local paths to WebP with fallback
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.startsWith('http')) {
      // For Unsplash URLs, add WebP format and optimization
      if (originalSrc.includes('unsplash.com')) {
        const url = new URL(originalSrc);
        url.searchParams.set('fm', 'webp');
        url.searchParams.set('auto', 'format');
        return url.toString();
      }
      return originalSrc;
    }
    // For local images, try .webp version first
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  const webpSrc = getWebPSrc(src);
  const fallbackSrc = src;

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <picture className={className}>
      {/* WebP source for modern browsers */}
      {!error && (
        <source 
          srcSet={webpSrc} 
          type="image/webp"
        />
      )}
      
      {/* Fallback image */}
      <img
        src={error ? fallbackSrc : webpSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onError={handleError}
        onLoad={handleLoad}
        className={className}
        style={{
          objectFit,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </picture>
  );
}

export default OptimizedImage;
