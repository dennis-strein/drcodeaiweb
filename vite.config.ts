import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './public/index.html',
        impressum: './public/impressum.html',
        privacy: './public/privacy.html',
        deleteAccount: './public/delete-account.html',
        stylechatai: './public/stylechatai.html',
        404: './public/404.html',
      },
    },
  },
  publicDir: 'public',
});
