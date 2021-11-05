#! /usr/bin/env node

import { readConfig } from "./helpers/read-config";
import { poeditImport } from "./poeditor-json-import";
import { Config } from "./types/config";

const main = async () => {
  const config: Config = await readConfig("poeditor-import");

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

main();
