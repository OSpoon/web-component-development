// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: [
    { 'my-component-logo': 'h-24 p-6 will-change-filter transition-all-500' },
    { 'my-component-button': ' rounded-md border border-transparent px-3 py-2 text-base font-medium font-inherit cursor-pointer transition duration-250 hover:border-blue-700 focus:outline-width-4' },
  ],
})