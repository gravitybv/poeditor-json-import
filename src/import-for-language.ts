import pMap from "p-map";
import { importForAllTags } from "./import-for-all-tags";
import { importForSingleTag } from "./import-for-single-tag";
import { Config } from "./types/config";

export const importForLangage = async (language: string, config: Config) => {
  const { tags, concurrency } = config;

  /** Generate for all tags */
  if (!tags) {
    return importForAllTags(language, config);
  }

  await pMap(tags, (tag) => importForSingleTag(language, tag, config), {
    concurrency,
  });
};
