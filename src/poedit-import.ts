import pMap from "p-map";
import { getLanguages } from "./helpers/get-languages";
import { importForLangage } from "./import-for-language";
import { Config } from "./types/config";

export const poeditImport = async (config: Config) => {
  const { token, project, concurrency } = config;
  let languages = config.languages;

  if (!languages) {
    languages = await getLanguages(token, project);
  }

  console.log(`Importing translations for languages ${languages.join(", ")}`);

  await pMap(languages, (lang: string) => importForLangage(lang, config), {
    concurrency,
  });
};
