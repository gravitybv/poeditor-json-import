import qs from "qs";

import { poeditorApi } from "./api-connector";

interface Response {
  data: {
    result: {
      url: string;
    };
  };
}

export const generateExport = async (
  token: string,
  project: string,
  language: string,
  sort?: boolean,
  tag?: string
) => {
  const { data } = (await poeditorApi.post(
    "/projects/export",
    qs.stringify({
      api_token: token,
      id: project,
      type: "key_value_json",
      language: language,
      order: sort ? "terms" : undefined,
      tags: tag,
    })
  )) as Response;

  if (!data?.result?.url) {
    throw Error("No export receievd");
  }

  return data.result.url;
};
