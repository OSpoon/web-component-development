import { readFileSync } from "fs";
import path from "node:path";
import { bgRed, red, green } from "kolorist";
import { execCommand } from "../shared";

export const gitCommitVerify = async () => {
  const dogit = await execCommand("git", ["rev-parse", "--show-toplevel"]);
  const root = path.join(dogit || "", ".git", "COMMIT_EDITMSG");
  const content = readFileSync(root, { encoding: "utf-8" }).trim();
  const REG_EXP =
    /(?<type>[a-z]+)(\((?<scope>.+)\))?(?<breaking>!)?: (?<description>.+)/i;
  if (!REG_EXP.test(content)) {
    throw new Error(`
        ${bgRed("[ERROR]")}
        ${red("Git 提交信息不符合 Angualr 规范~\n")}
        ${green("推荐: 运行 npx esno git-commit-script.ts 生成提价信息")}
    `);
  }
};
