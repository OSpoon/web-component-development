import { gitInitHooks } from "./command/git-init-hooks";
import { cwd } from "./config";

async function launcher() {
  await Promise.all([
    await gitInitHooks(cwd),
  ]);
}

launcher();
