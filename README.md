# Quark 组件开发

基于本工程，您可以构建一系列属于自己的跨技术栈/无框架 组件。

## 支持

在 `template-quarkc-component-ts` 的基础上做了以下变更

| 序号 | 描述                            |
| ---- | ------------------------------- |
| 1    | 调整 `npm run build` 为批量构建 |
| 2    | 添加 `npm run new` 创建组件     |

## 初始化

```
npm install
npm run dev
```

## 1. 生成组件

生成名为 MyComponent 的组件

```
$ npm run new

> cross-platform-components@0.0.1 new
> plop

? component name please : my-component
✔  ++ /components/MyComponent/index.tsx
✔  ++ /components/MyComponent/index.less
✔  ++ /components/MyComponent/vite-env.d.ts
```

## 2. 使用组件

```html
<head>
  <!-- ① 导入组件 -->
  <script type="module" src="./components/MyComponent/index.tsx"></script>
</head>
<body>
  <!-- ② 使用组件 -->
  <my-component text="为跨技术栈而生！"></my-component>
</body>
```

## 3. 打包产物

```
npm run build
```

打包后的产出为： `dist/<component name>/index.js` 和 `dist/<component name>/index.umd.js`。

```tree
.
├── types
|     └── index.d.ts
├── index.js
├── index.umd.js
└── package.json
```


## 4. 验证产物

将组件导入路径调整为打包后的产物路径

```html
<head>
  <!-- ① 导入组件 -->
  <script type="module" src="./dist/MyComponent/index.js"></script>
</head>
<body>
  <!-- ② 使用组件 -->
  <my-component text="为跨技术栈而生！"></my-component>
</body>
```

```html
<head>
  <!-- ① 导入组件 -->
  <script type="module" src="./dist/MyComponent/index.umd.js"></script>
</head>
<body>
  <!-- ② 使用组件 -->
  <my-component text="为跨技术栈而生！"></my-component>
</body>
```

详细文档，请访问：https://quarkc.hellobike.com/#/zh-CN/docs/publishing
