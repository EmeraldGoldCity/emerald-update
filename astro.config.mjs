import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { compression } from 'vite-plugin-compression2';
import { visualizer } from 'rollup-plugin-visualizer';

// https://astro.build/config
export default defineConfig({
  site: 'https://emeraldcitylimos.com',
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      filter: (page) => !page.includes('/admin'),
    }),
  ],
  vite: {
    plugins: [
      tailwindcss(),
      // Gzip compression
      compression({
        algorithm: 'gzip',
        exclude: [/\.(br)$/, /\.(gz)$/],
      }),
      // Brotli compression (better than Gzip)
      compression({
        algorithm: 'brotliCompress',
        exclude: [/\.(br)$/, /\.(gz)$/],
      }),
      // Bundle analyzer (only in build mode)
      process.env.ANALYZE && visualizer({
        open: true,
        filename: 'dist/stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      cssMinify: 'lightningcss',
      minify: 'esbuild',
      sourcemap: false, // Disable in production
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router': ['react-router-dom'],
            'ui-radix': ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
            'icons': ['lucide-react'],
          },
        },
      },
      chunkSizeWarningLimit: 500,
    },
    ssr: {
      noExternal: ['@radix-ui/*', 'lucide-react'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
    format: 'directory',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
    domains: ['images.unsplash.com'],
    remotePatterns: [{
      protocol: 'https',
      hostname: '**.unsplash.com',
    }],
  },
  output: 'static',
  experimental: {},
  server: {
    port: 4321,
    host: true,
  },
});
