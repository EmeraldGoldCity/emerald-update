/**
 * LoadingSpinner Component
 * Displays while lazy-loaded routes are loading
 */
export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-emerald-950">
      <div className="text-center">
        {/* Spinning logo/icon */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-emerald-200 border-t-[#d4af37] rounded-full animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <p className="text-[#d4af37] font-semibold text-lg">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
