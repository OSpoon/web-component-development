import { defineConfig } from "code-genius";
import { clearInstaller } from "@codegenius/clear-plugin";
import { gitCommitVerifyInstaller } from "@codegenius/verify-plugin";
import { gitInitSimpleHooksInstaller } from "@codegenius/hooks-plugin";

export default defineConfig({
  plugins: [
    clearInstaller({
      files: ["./dist"],
    }),
    gitCommitVerifyInstaller(),
    gitInitSimpleHooksInstaller(),
  ],
});
