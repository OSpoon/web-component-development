import path from "node:path";
import fs from "fs-extra";
import { spawn } from "child_process";
import { log } from "node:console";

const handlerBuildComponent = () => {
  return new Promise((resolve, reject) => {
    const buildProcess = spawn("npm", ["run", "build"], {
      stdio: "inherit",
    });
    buildProcess.on("close", (code) => {
      if (code === 0) {
        log("🎉 Component build successfully");
        resolve();
      } else {
        reject(`💔 Component build failed, exit code：${code}`);
      }
    });
  });
};

export const AutomaticallyCompileComponents = () => {
  return {
    name: "automatically-compile-components",
    serverStart: async ({ config }) => {
      const dist = path.resolve(config.rootDir, "dist");
      if (!fs.existsSync(dist)) {
        await handlerBuildComponent();
      }
    },
  };
};

export const FixContentType = (suffix, type) => {
  return {
    name: "fix-content-type",
    resolveMimeType: (context) => {
      if (context.path.endsWith(suffix)) {
        return type;
      }
    },
  };
};
