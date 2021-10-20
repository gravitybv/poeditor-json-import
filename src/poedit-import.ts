import { getLanguages } from "./helpers/get-languages";
import { importForLangage } from "./import-for-language";
import { Config } from "./types/config";

export const poeditImport = async (config: Config) => {
  const { token, project } = config;
  let languages = config.languages;

  if (!languages) {
    languages = await getLanguages(token, project);
  }

  console.log(`Importing translations for languages ${languages.join(", ")}`);

  languages.map((lang: string) => importForLangage(lang, config));
};
