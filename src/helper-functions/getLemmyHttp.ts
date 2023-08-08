import { LemmyHttp } from "lemmy-js-client";

export const getLemmyHttp = () => {
  const baseUrl = "https://lemmy.ml/";
  const client = new LemmyHttp(baseUrl, {});
  return client;
};
