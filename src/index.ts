#! /usr/bin/env node

import { poeditImport } from "./poedit-import";

const main = async (configFilePath: string) => {
  if (!configFilePath) {
    throw Error("No config provided, please provide a path to a json file.");
  }

  const config = await import(configFilePath);

  if (!config.token || !config.project || !config.outDir) {
    throw Error("Invalid config provided, please check the readme at ---.");
  }

  poeditImport(config);
};

main(process.argv[2]);
