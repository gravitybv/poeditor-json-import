import { importForAllTags } from "./import-for-all-tags";
import { importForSingleTag } from "./import-for-single-tag";
import { Config } from "./types/config";

export const importForLangage = async (language: string, config: Config) => {
  const { tags } = config;

  /** Generate for all tags */
  if (!tags) {
    return importForAllTags(language, config);
  }

  /** Generate for each tag independently */
  tags.map((tag: string) => {
    importForSingleTag(language, tag, config);
  });
};
