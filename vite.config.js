import autoprefixer from "autoprefixer"
import {defineConfig} from "vite"
import {resolve} from 'path';

export default defineConfig({
    base: '',
    build: {
        outDir: './docs',
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
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