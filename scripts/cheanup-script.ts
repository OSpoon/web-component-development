import { cleanUp } from "./command/cheanup";
import { cleanUpDirs } from "./config";

async function launcher() {
  await Promise.all([
    await cleanUp(cleanUpDirs),
  ]);
}

launcher();
