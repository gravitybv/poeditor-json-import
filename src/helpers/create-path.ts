import { Stats } from "fs";
import { stat, mkdir } from "fs/promises";

export const createPathIfNotExists = async (path: string) => {
  try {
    const stats: Stats = await stat(path);
    if (stats.isDirectory()) {
      return;
    }
    throw new Error(`Given path is not a directory: ${path}`);
  } catch (error: any) {
    if (error["code"] === "ENOENT") {
      await mkdir(path, { recursive: true });
      return;
    }
    throw error;
  }
};
