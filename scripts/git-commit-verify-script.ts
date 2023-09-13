import { gitCommitVerify } from "./command/git-commit-verify";

async function launcher() {
  await Promise.all([
    await gitCommitVerify(),
  ]);
}

launcher();
