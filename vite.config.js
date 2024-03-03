import autoprefixer from "autoprefixer"
import {defineConfig} from "vite"
import {resolve} from 'path';

export default defineConfig({
    base: '',
    build: {
        outDir: './docs',
        rollupOptions: {
            input: {
                homepage: resolve(__dirname, 'homepage.html'),
                community: resolve(__dirname, 'community.html'),
                explore: resolve(__dirname, 'explore.html'),
            },
            output: {
                entryFileNames: `js/script.js`,
                chunkFileNames: `js/script.js`,
                assetFileNames: (assetInfo) => {
                    let fileName
                    let extType = assetInfo.name.split('.').at(1);
                    if (/css/i.test(extType)) {
                        fileName = 'style';
                        return `${extType}/${fileName}[extname]`;
                    } else {
                        return `${extType}/[name][extname]`;
                    }
                }
            }
        },
        css: {
            postcss: {
                plugins: [
                    autoprefixer()
                ],
                sourceMap: true
            },
        },
    }
})