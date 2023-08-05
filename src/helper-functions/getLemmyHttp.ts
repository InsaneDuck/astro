import { LemmyHttp } from "lemmy-js-client";

export const getLemmyHttp = () => {
  const baseUrl = "https://lemmy.ml/";
  return new LemmyHttp(baseUrl, {});
};
