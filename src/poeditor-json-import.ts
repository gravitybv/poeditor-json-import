import pMap from "p-map";
import { getLanguages } from "./helpers/get-languages";
import { progressBar } from "./helpers/progress-bar";
import { importForAllTags } from "./import-for-all-tags";
import { importForSingleTag } from "./import-for-single-tag";
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

  await pMap(
    languages,
    async (lang: string) => {
      /** Generate for all tags at once */
      if (!tags) {
        return importForAllTags(lang, config);
      }

      /** Generate for one tag at a time */
      return pMap(tags, (tag) => importForSingleTag(lang, tag, config), {
        concurrency: 1,
      });
    },
    { concurrency }
  );

  progressBar.stop();
};
