import { LemmyHttp } from "lemmy-js-client";

export const getLemmyHttp = () => {
  let baseUrl = "https://enterprise.lemmy.ml/";
  return new LemmyHttp(baseUrl, {});
};
