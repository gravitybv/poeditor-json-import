import { createWriteStream } from "fs";
import https from "https";
import { pipeline } from "stream";
import { Config } from "../types/config";

import { generateFilePath } from "./generate-file-path";

export const createFileFromDownloadLink = async (
  exportLink: string,
  config: Config,
  language: string,
  tag?: string
) => {
  const { outDir, transformLocaleCodes } = config;

  /** Ensure the folder structure is present before creating the file. */
  const filePath = await generateFilePath(
    outDir,
    language,
    transformLocaleCodes,
    tag
  );

  const fileWriteStream = createWriteStream(filePath);

  return new Promise<void>((resolve, reject) => {
    /** Retrieve the export and put into the file */
    https.get(exportLink, (response) => {
      pipeline(response, fileWriteStream, (error) => {
        if (error) {
          return reject(error);
        }
        return resolve();
      });
    });
  });
};
