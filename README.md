# UnoCSS for Quark

中文 | [English](./README.es-US.md)

## 安装UnoCSS：

```
npm install -D unocss
```

## 初始化 Plugin

```javascript
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
```

## 新增 `uno.config.ts`

```javascript
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
})
```

## 增加 `@unocss-placeholder` 到 style

```javascript
@customElement({ tag: "my-component", style: `${style}@unocss-placeholder` })
class MyComponent extends QuarkElement {}
```


想了解更多信息，请参考：https://unocss.dev/