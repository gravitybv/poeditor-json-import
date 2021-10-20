import fs from "fs";

export const createPathIfNotExists = (path: string) => {
  if (fs.existsSync(path)) {
    return;
  }

  fs.mkdirSync(path, { recursive: true });
  console.log(`Created new dirs at ${path}`);
};
