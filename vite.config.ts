import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
                    '@import "@/styles/global/variables"; @import "@/styles/global/media";',
            },
        },
    },

    build: {
        manifest: true,
        outDir: './dist',
        // rollupOptions: {
        //     output: {
        //         chunkFileNames: `[name].[hash].${buildTag}.js`,
        //         assetFileNames: `[name].[hash].${buildTag}.[ext]`,
        //     },
        // },
    },
})
