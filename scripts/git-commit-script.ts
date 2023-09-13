import { gitCommit } from "./command/git-commit";
import { gitCommitScopes, gitCommitTypes } from "./config";

async function launcher() {
  await Promise.all([
    await gitCommit(gitCommitTypes, gitCommitScopes, { enableEmoji: true }),
  ]);
}

launcher();
