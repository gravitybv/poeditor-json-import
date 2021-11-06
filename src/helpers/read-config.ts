import { cosmiconfig } from "cosmiconfig";
import { Config } from "../types/config";

export const readConfig = async (module: string): Promise<Config> => {
  const explorer = cosmiconfig(module);

  try {
    const search = await explorer.search();

    if (!search || !search.config) {
      throw Error(`File not found.`);
    }

    if (search.isEmpty) {
      throw Error(`Config is empty.`);
    }

    return search?.config as Config;
  } catch (error) {
    throw Error(`Could not load config: ${error}`);
  }
};
