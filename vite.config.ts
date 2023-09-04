import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        UnoCSS({
            mode: 'shadow-dom',
        })
    ]
});
