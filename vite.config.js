import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
		},
	},
	server: {
		port: 8080,
		hot: true,
	},
	publicDir: 'public',
})
