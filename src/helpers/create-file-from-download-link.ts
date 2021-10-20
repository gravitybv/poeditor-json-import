import fs from "fs";
import https from "https";
import { Config } from "../types/config";

import { createPathIfNotExists } from "./create-path";

export const createFileFromDownloadLink = (
  exportLink: string,
  config: Config,
  language: string,
  tag?: string
) => {
  const { outDir } = config;

  /** Ensure the folder structure is present before creating the file. */
  const dirs = `${outDir}/${language}`;
  createPathIfNotExists(dirs);

  const fileName = `${tag || language}.json`;
  const path = `${dirs}/${fileName}`;

  const file = fs.createWriteStream(path);

  /** Retrieve the export and put into the file */
  https.get(exportLink, (response) => {
    response.pipe(file);
  });
};
