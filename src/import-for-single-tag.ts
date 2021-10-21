import { createFileFromDownloadLink } from "./helpers/create-file-from-download-link";
import { generateExport } from "./helpers/generate-export";
import { progressBar } from "./helpers/progress-bar";
import { Config } from "./types/config";

export const importForSingleTag = async (
  language: string,
  tag: string,
  config: Config
) => {
  const { token, project, sort } = config;

  /** Call API and receive the export link */
  const exportLink = await generateExport(token, project, language, sort, tag);

  if (!exportLink) {
    throw Error("Export not received");
  }

  await createFileFromDownloadLink(exportLink, config, language, tag);

  progressBar.increment();
};
