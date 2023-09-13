import { rimraf } from "rimraf";

export const cleanUp = async (paths: string[]) => {
  await rimraf(paths, { glob: true });
};
