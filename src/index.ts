#! /usr/bin/env node

import { poeditImport } from "./poeditor-json-import";
import { Config } from "./types/config";

const main = async (configFilePath: string) => {
  if (!configFilePath) {
    throw Error("No config provided, please provide a path to a json file.");
  }

  const config = (await import(configFilePath)) as Config;

  if (!config.token || !config.project || !config.outDir) {
    throw Error(
      "Invalid config provided, please check the readme at https://github.com/gravitybv/poeditor-json-import."
    );
  }

  if (!config.concurrency) {
    config.concurrency = 2;
  }

  poeditImport(config);
};

main(process.argv[2]);
