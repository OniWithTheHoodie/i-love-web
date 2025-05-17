import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: 
  [
    sveltekit(), 
    tailwindcss()  
  ],
  ssr: {
    // Specify external dependencies that should not be bundled
    external: ['@sveltejs/kit']
  },
  optimizeDeps: {
	exclude: ['chunk-WFCAAOOU.js', 'chunk-2XS5AGVA.js','chunk-A4WLGF74.js']
  }  
});
