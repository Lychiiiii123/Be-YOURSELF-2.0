const react = require('@vitejs/plugin-react');

/** @type {import('vite').UserConfig} */
module.exports = {
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
};
