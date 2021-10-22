import * as path from "path";
import { createPathIfNotExists } from "./create-path";
import { transformLocaleCode } from "./locale-code-transformer";

export const generateFilePath = async (
  outDir: string,
  language: string,
  transformLocaleCodes?: any[],
  tag?: string
): Promise<string> => {
  const transformedLanguage = transformLocaleCode(
    language,
    transformLocaleCodes
  );
  const dirs = path.join(outDir, transformedLanguage);

  const fileName = `${tag || transformedLanguage}.json`;
  const filePath = path.join(dirs, fileName);

  await createPathIfNotExists(dirs);

  return filePath;
};
