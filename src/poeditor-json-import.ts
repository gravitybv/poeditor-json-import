import pMap from "p-map";
import { getLanguages } from "./helpers/get-languages";
import { progressBar } from "./helpers/progress-bar";
import { importForLangage } from "./import-for-language";
import { Config } from "./types/config";

export const poeditImport = async (config: Config) => {
  const { token, project, tags, concurrency } = config;
  let languages = config.languages;

  if (!languages) {
    languages = await getLanguages(token, project);
  }

  /** Setup the progress bar. */
  const operationCount = languages.length * (tags ? tags.length : 1);
  progressBar.start(operationCount, 0);

  await pMap(languages, (lang: string) => importForLangage(lang, config), {
    concurrency,
  });

  progressBar.stop();
};
