import { LemmyHttp } from "lemmy-js-client";
import { Platform } from "react-native";

const baseUrl = "https://lemmy.ml/";

const operatingSystem = Platform.OS;
const options = {
  headers: { "User-Agent": `Astro ${operatingSystem}` },
  fetchFunction: undefined,
};
const client: LemmyHttp | null = new LemmyHttp(baseUrl);
export const getLemmyHttp = () => {
  return client;
};
