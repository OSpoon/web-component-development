# Developing Cross-Platform Components Based on Quarkc

With this project, you can create a series of cross-technology stack/frameworkless components of your own.

[中文](./README.md) | English

## Changes

Changes made to `template-quarkc-component-ts` include:
| Number | Description |
| ------ | ---------------------------- |
| 1 | Adjusted `npm run build` to batch build |
| 2 | Added `npm run new` to create components |
| 3 | [Add `unocss` atomic CSS configuration.](https://github.com/OSpoon/web-component-development/tree/unocss/README.md) |
| 4 | Replace the test suite with `@web/test-runnner` |
| 5 | Tuning unit tests directly import component source code |

## Initialization

```
npm install
npm run dev
```

## 1. Generating Components

Generate a component named MyComponent

```
$ npm run new
> web-component-development@0.0.1 new
> plop
? component name please : my-component
✔  ++ /components/MyComponent/index.tsx
✔  ++ /components/MyComponent/index.less
✔  ++ /components/MyComponent/vite-env.d.ts
```

## 2. Using Components

```html
<head>
  <!-- ① Import component -->
  <script type="module" src="./components/MyComponent/index.tsx"></script>
</head>
<body>
  <!-- ② Use component -->
  <my-component text="Made for cross-technology stack purposes!"></my-component>
</body>
```

## 3. Packaging

```
npm run build
```

The output after packaging is: `dist/<component name>/index.js` and `dist/<component name>/index.umd.js`.

```tree
.
├── types
|     └── index.d.ts
├── index.js
├── index.umd.js
└── package.json
```

## 4. Verifying Output

Adjust the component path to the packaged output path

```html
<head>
  <!-- ① Import component -->
  <script type="module" src="./dist/MyComponent/index.js"></script>
</head>
<body>
  <!-- ② Use component -->
  <my-component text="Made for cross-technology stack purposes!"></my-component>
</body>
```

```html
<head>
  <!-- ① Import component -->
  <script type="module" src="./dist/MyComponent/index.umd.js"></script>
</head>
<body>
  <!-- ② Use component -->
  <my-component text="Made for cross-technology stack purposes!"></my-component>
</body>
```

For detailed documentation, please visit: https://quark-ecosystem.github.io/quarkc-docs/#/en-US/docs/publishing
