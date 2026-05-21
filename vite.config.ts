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

          // Manual Chunking (Sabse Important)
          manualChunks: {
            // Heavy libraries ko alag chunks mein
            vendor: ['react', 'react-dom'],
            motion: ['framer-motion'],
            supabase: ['@supabase/supabase-js'],
            // Agar aur heavy libs hain to yahan add karo
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