// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//    base: '/WhiteMatrix_AbdhulWahabTradingLLC/', // 👈 important! matches your repo name
//   server: {
//     port: 5173
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If GITHUB_PAGES=true, use GitHub repo path; otherwise, use root for Netlify
const isGithubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [react()],
  base: isGithubPages
    ? '/WhiteMatrix_AbdhulWahabTradingLLC/' // GitHub Pages
    : '/',                                  // Netlify
  server: {
    port: 5173,
  },
});
