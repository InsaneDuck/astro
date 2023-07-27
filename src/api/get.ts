import { LemmyHttp } from "lemmy-js-client";

export const getLemmyHttp = () => {
  let baseUrl = "https://lemmy.world/";
  return new LemmyHttp(baseUrl, {});
};
