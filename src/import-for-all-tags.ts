import { createFileFromDownloadLink } from "./helpers/create-file-from-download-link";
import { generateExport } from "./helpers/generate-export";
import { Config } from "./types/config";

export const importForAllTags = async (language: string, config: Config) => {
  const { token, project } = config;

  /** Call API and receive the export link */
  const exportLink = await generateExport(token, project, language);

  if (!exportLink) {
    throw Error("Export not received");
  }

  createFileFromDownloadLink(exportLink, config, language);
};
