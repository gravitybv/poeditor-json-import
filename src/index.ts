import https from "https";
import fs from "fs";
import axios from "axios";
import { getLanguages } from "./get-languages";
import { generateExport } from "./generate-export";
import dotenv from "dotenv";

/** Load environment variables */
dotenv.config();
const project = parseInt(process.env.PROJECT || "", 10);
const token = process.env.API_KEY || "";

/** Documentation can be found at https://poeditor.com/docs/api */
const poeditorApi = axios.create({
  baseURL: "https://api.poeditor.com/v2",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const main = async () => {
  const languages = await getLanguages(poeditorApi, token, project);

  const exportLink = await generateExport(
    poeditorApi,
    token,
    project,
    "en-us",
    "overview"
  );

  const path = "./testFile";

  const file = fs.createWriteStream(path);
  const request = https.get(exportLink, function (response) {
    response.pipe(file);
  });
};

main();
