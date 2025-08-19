import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: '/src',
		},
	},
	build: {
		outdir: 'dist',
		assetsDir: 'static',
		sourcemap: false,
		manifest: true,
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
	base: '/',
});
