import { createFileFromDownloadLink } from "./helpers/create-file-from-download-link";
import { generateExport } from "./helpers/generate-export";
import { progressBar } from "./helpers/progress-bar";
import { Config } from "./types/config";

export const importForSingleTag = async (
  language: string,
  tag: string,
  config: Config
) => {
  const { token, project, sort, filter } = config;

  /** Call API and receive the export link */
  const exportLink = await generateExport(
    token,
    project,
    language,
    sort,
    filter,
    tag
  );

  if (!exportLink) {
    throw Error("Export not received");
  }

  progressBar.increment();

  return createFileFromDownloadLink(exportLink, config, language, tag);
};
