import { createFileFromDownloadLink } from "./helpers/create-file-from-download-link";
import { generateExport } from "./helpers/generate-export";
import { progressBar } from "./helpers/progress-bar";
import { Config } from "./types/config";

export const importForAllTags = async (language: string, config: Config) => {
  const { token, project, sort, filter } = config;

  /** Call API and receive the export link */
  const exportLink = await generateExport(
    token,
    project,
    language,
    sort,
    filter
  );

  if (!exportLink) {
    throw Error("Export not received");
  }

  await createFileFromDownloadLink(exportLink, config, language);

  progressBar.increment();
};
