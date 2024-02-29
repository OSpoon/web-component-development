import path from "node:path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { build, BuildOptions, InlineConfig } from "vite";
import dts from "vite-plugin-dts";
import { dependencies } from "../package.json";
import { kebabCase } from "change-case";

const __dirname = dirname(fileURLToPath(import.meta.url));
const componentRootPath = path.resolve(__dirname, "../components/");

const syncDts = (name) =>
  fs.copySync("dist/index.d.ts", `dist/${name}/index.d.ts`);

const clearDts = () => fs.removeSync("dist/index.d.ts");

const getComponentDirNames = () =>
  fs.readdirSync(componentRootPath).filter((filename) => {
    const componentDir = path.resolve(componentRootPath, filename);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.tsx");
  });

const fileNameConvert = (format, entryName) => {
  if (format === "es") {
    return `${entryName}.js`;
  }
  return `${entryName}.${format}.js`;
};

const outputPkgFile = (filepath, pkg) => {
  fs.outputFile(
    path.resolve(filepath, `package.json`),
    JSON.stringify(pkg, null, 2),
    `utf-8`
  );
};

const buildAllComponents = async () => {
  const componentDirNames = getComponentDirNames();
  if (componentDirNames.length === 0) {
    console.warn(
      "❓You haven't created the component yet, just type `npm run dev` to get started"
    );
    return;
  }
  for (let name of componentDirNames) {
    const componentEntry = path.resolve(componentRootPath, name);
    const outputCompDir = `dist/${name}`;

    const buildConfig: BuildOptions = {
      lib: {
        name,
        formats: ["es", "umd"],
        entry: componentEntry,
        fileName: (format, entryName) => fileNameConvert(format, entryName),
      },
      rollupOptions: {
        external: ["quarkc"],
        output: {
          dir: outputCompDir,
          globals: {
            quarkc: "Quarkc",
          },
        },
      },
    };

    await build({
      build: buildConfig,
      plugins: [dts()],
    } as InlineConfig);

    // 单个组件需要处理 index.d.ts 文件路径
    componentDirNames.length === 1 && syncDts(name);

    outputPkgFile(outputCompDir, {
      name: `${kebabCase(name)}`,
      main: `index.umd.js`,
      module: `index.js`,
      types: `index.d.ts`,
      exports: {
        ".": {
          import: "./index.js",
          require: "./index.umd.js",
          types: "./index.d.ts",
        },
      },
      dependencies,
    });
  }

  clearDts();
};

buildAllComponents();
