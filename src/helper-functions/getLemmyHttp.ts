import { LemmyHttp } from "lemmy-js-client";

export const getLemmyHttp = () => {
  let baseUrl = "https://lemmy.ml/";
  return new LemmyHttp(baseUrl, {});
};
