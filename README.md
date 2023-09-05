# Quarkc 组件开发 - UnoCSS

将 UnoCSS (即时按需原子 CSS 引擎) 引入 Quarkc 组件开发

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
            // webcomponent 启用
            mode: 'shadow-dom',
        })
    ]
});
```

## 增加 `uno.config.ts` 配置文件

```javascript
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
})
```

## 添加 `@unocss-placeholder` 到样式表

```javascript
@customElement({ 
    tag: "my-component", 
    style: `${style}@unocss-placeholder` 
})
class MyComponent extends QuarkElement {}
```

想了解更多信息，请参考：https://unocss.dev/