import {
  AutomaticallyCompileComponents,
  FixContentType,
} from "./web-test-runner.plugins.mjs";

const filteredLogs = ["Lit is in dev mode"];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  nodeResolve: true,
  files: [
    "components/**/__tests__/*.test.js",
    "components/**/__tests__/*.test.ts",
  ],
  coverage: true,
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (
        typeof arg === "string" &&
        filteredLogs.some((l) => arg.includes(l))
      ) {
        return false;
      }
    }
    return true;
  },
  plugins: [AutomaticallyCompileComponents(), FixContentType(".ts", "js")],
});
