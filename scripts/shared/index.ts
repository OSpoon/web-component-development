import { execa } from "execa";
import type { Options } from "execa";
import { warn } from "node:console";

export const execCommand = async (
  cmd: string,
  args: string[],
  options?: Options
) => {
  try {
    const res = await execa(cmd, args, options);
    return res?.stdout?.trim() || "";
  } catch (error) {
    warn(error.message);
  }
};
