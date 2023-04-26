import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        modules: {
            localsConvention: 'camelCase',
            generateScopedName: "[name]__[local]_[hash:base64:3]",
        }
    },
    base: "/resolvable-web/"
    // server: { 
    //   proxy: { 
    //     "/api": { 
    //       target: "http://134.122.98.10", 
    //       changeOrigin: true, 
    //       secure: true, 
    //       rewrite: (path) => path.replace(/^\/api/, ""),
    //     }, 
    //   }, 
    // }
})