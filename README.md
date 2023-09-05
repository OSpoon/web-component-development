# Quarkc 组件开发 - UnoCSS
在 Quarkc 组件开发中引入 UnoCSS（即时按需原子 CSS 引擎）。

中文 | [English](./README.es-US.md)
## 1. 安装 UnoCSS
```
npm install -D unocss
```
## 2. 配置 UnoCSS
```javascript
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
export default defineConfig({
    plugins: [
        UnoCSS({
            mode: 'shadow-dom',
        })
    ]
});
```
## 3. 添加 `uno.config.ts` 配置文件
```javascript
// uno.config.ts
import { defineConfig } from 'unocss'
export default defineConfig({
  // ...UnoCSS options
})
```
## 4. 在样式表中添加 `@unocss-placeholder`
```javascript
@customElement({ 
    tag: "my-component", 
    style: `${style}@unocss-placeholder` 
})
class MyComponent extends QuarkElement {}
```
更多信息请参考：https://unocss.dev/