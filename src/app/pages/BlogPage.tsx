export function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Coming Soon Section */}
      <section
        className="flex-1 flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 relative overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #d4af37 0, #d4af37 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          {/* Icon / emblem */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#d4af37] mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9 text-[#d4af37]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>

          {/* Label */}
          <p className="text-[#d4af37] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Emerald City Limos · Blog
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Something Great
            <br />
            <span className="text-[#d4af37]">Is On Its Way</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#d4af37] opacity-50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <div className="h-px w-16 bg-[#d4af37] opacity-50" />
          </div>

          {/* Copy */}
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            We&rsquo;re refreshing our blog with a new experience powered by a
            proper CMS. Expert guides, Seattle travel tips, and luxury
            transportation insights — coming soon.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-now"
              className="bg-[#d4af37] hover:bg-[#b8941f] text-black px-10 py-4 rounded-lg text-base font-bold transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Book a Ride Now
            </a>
            <a
              href="/"
              className="border border-white/30 hover:border-white/60 text-white px-10 py-4 rounded-lg text-base font-semibold transition-all inline-flex items-center justify-center"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}