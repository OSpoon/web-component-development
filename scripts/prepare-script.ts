import { gitInitSimpleHooks } from "code-genius";

async function launcher() {
  await Promise.all([
    await gitInitSimpleHooks(process.cwd()),
  ]);
}

launcher();
