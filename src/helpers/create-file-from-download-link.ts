import fs from "fs";
import https from "https";
import { Config } from "../types/config";

import { createPathIfNotExists } from "./create-path";
import { generateFilePath } from "./generate-file-path";

export const createFileFromDownloadLink = (
  exportLink: string,
  config: Config,
  language: string,
  tag?: string
) => {
  const { outDir, transformLocaleCodes } = config;

  /** Ensure the folder structure is present before creating the file. */
  const path = generateFilePath(outDir, language, transformLocaleCodes, tag);

  const file = fs.createWriteStream(path);

  /** Retrieve the export and put into the file */
  https.get(exportLink, (response) => {
    response.pipe(file);
  });
};
