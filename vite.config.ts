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
      minify: 'esbuild',           // Fast aur effective
      sourcemap: false,            // Production mein false rakho

      rollupOptions: {
        output: {
          // Better caching ke liye hash
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',

          // Manual Chunking (Function-based optimization for exact matching)
          manualChunks(id) {
            // Supabase ko alag chunk mein daal rahe hain
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            // motion/react aur framer-motion dono ko pakadne ke liye
            if (id.includes('motion') || id.includes('framer-motion')) {
              return 'motion';
            }
            // React aur baki core libraries ko vendor chunk mein daal rahe hain
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
              return 'vendor';
            }
          },
        },
      },

      // Chunk size limit (warning ke liye)
      chunkSizeWarningLimit: 600,
    },

    // Preview / Dev Server
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});