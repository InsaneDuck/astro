import { LemmyHttp } from "lemmy-js-client";
import { Platform } from "react-native";

let client: LemmyHttp | null = null;
const baseUrl = "https://lemmy.ml/";
const operatingSystem = Platform.OS;

export const getLemmyHttp = () => {
  const options = {
    headers: { "User-Agent": `Astro ${operatingSystem}` },
    fetchFunction: undefined,
  };
  client = new LemmyHttp(baseUrl);
  return client;
};
