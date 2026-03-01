import { useState } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * LazyYouTube Component
 * 
 * Only loads YouTube iframe when user clicks play button.
 * Saves 500KB+ of initial page load!
 * 
 * Usage:
 * <LazyYouTube 
 *   videoId="kcUFqF7MUWc" 
 *   title="Emerald City Limos Introduction"
 * />
 */
export function LazyYouTube({ videoId, title, className = '' }: LazyYouTubeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const iframeSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;

  const handleClick = () => {
    setIsLoaded(true);
  };

  if (isLoaded) {
    return (
      <div className={`relative w-full ${className}`} style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={iframeSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative w-full cursor-pointer group ${className}`}
      style={{ paddingBottom: '56.25%' }}
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
        loading="lazy"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors rounded-lg" />
      
      {/* Play Button */}
      <button
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shadow-2xl"
        aria-label="Play video"
      >
        <svg 
          className="w-8 h-8 text-white ml-1" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
      
      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
        <p className="text-white font-semibold">{title}</p>
      </div>
    </div>
  );
}

export default LazyYouTube;
