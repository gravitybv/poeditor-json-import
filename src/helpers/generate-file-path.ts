import { createPathIfNotExists } from "./create-path";
import { transformLocaleCode } from "./locale-code-transformer";

export const generateFilePath = (
  outDir: string,
  language: string,
  transformLocaleCodes?: any[],
  tag?: string
): string => {
  const transformedLanguage = transformLocaleCode(
    language,
    transformLocaleCodes
  );
  const dirs = `${outDir}/${transformedLanguage}`;

  const fileName = `${tag || transformedLanguage}.json`;
  const path = `${dirs}/${fileName}`;

  createPathIfNotExists(dirs);

  return path;
};
