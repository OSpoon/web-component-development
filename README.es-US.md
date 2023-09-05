# Developing Quarkc Components with UnoCSS
Integrating UnoCSS (an on-demand, atomic CSS engine) into Quarkc component development.

[中文](./README.md) | English
## 1. Install UnoCSS
```
npm install -D unocss
```
## 2. Configure UnoCSS
```javascript
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
export default defineConfig({
    plugins: [
        UnoCSS({
            // enable webcomponent
            mode: 'shadow-dom',
        })
    ]
});
```
## 3. Add `uno.config.ts` Configuration File
```javascript
// uno.config.ts
import { defineConfig } from 'unocss'
export default defineConfig({
  // ...UnoCSS options
})
```
## 4. Add `@unocss-placeholder` to Style Sheet
```javascript
@customElement({ 
    tag: "my-component", 
    style: `${style}@unocss-placeholder` 
})
class MyComponent extends QuarkElement {}
```
For more information, please visit: https://unocss.dev/