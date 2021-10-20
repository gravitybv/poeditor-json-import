import { AxiosInstance } from "axios";
import qs from "qs";

interface Response {
  data: {
    result: {
      languages: any[];
    };
  };
}

export const getLanguages = async (
  poeditorApi: AxiosInstance,
  token: string,
  project: number
) => {
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
