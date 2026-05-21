import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), tailwindcss()],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    build: {
      // === Performance Optimizations ===
      minify: 'esbuild',           // Code ko compress karne ke liye
      sourcemap: false,            // Production build ko halka rakhne ke liye

      // Network Dependency Tree (Chaining) ko khatam karne ke liye preload injection
      modulePreload: {
        polyfill: true,
      },

      rollupOptions: {
        output: {
          // Better caching ke liye hash control
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',

          // JavaScript bundles ko optimize aur split karne ke liye function
          manualChunks(id) {
            // Supabase chunk
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            // Motion / Framer Motion chunk
            if (id.includes('motion') || id.includes('framer-motion')) {
              return 'motion';
            }
            // Core React libraries chunk
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
              return 'vendor';
            }
          },
        },
      },

      // Chunk size limit warning threshold
      chunkSizeWarningLimit: 600,
    },

    // Preview / Dev Server
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});