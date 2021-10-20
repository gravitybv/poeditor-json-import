import { AxiosInstance } from "axios";
import qs from "qs";

interface Response {
  data: {
    result: {
      url: string;
    };
  };
}

export const generateExport = async (
  poeditorApi: AxiosInstance,
  token: string,
  project: number,
  language: string,
  tag: string
) => {
  const { data } = (await poeditorApi.post(
    "/projects/export",
    qs.stringify({
      api_token: token,
      id: project,
      type: "key_value_json",
      language: language,
      tags: tag,
    })
  )) as Response;

  if (!data?.result?.url) {
    throw Error("No export receievd");
  }

  return data.result.url;
};
