import qs from "qs";
import { poeditorApi } from "./api-connector";

interface Response {
  data: {
    result: {
      languages: any[];
    };
  };
}

/** Get all languages available in the project. */
export const getLanguages = async (token: string, project: string) => {
  const { data } = (await poeditorApi.post(
    "/languages/list",
    qs.stringify({
      api_token: token,
      id: project,
    })
  )) as Response;

  if (!data?.result?.languages) {
    throw Error("No languages receievd");
  }

  const languages = data?.result?.languages;

  return languages.map(({ code }) => code);
};
