import { LemmyHttp } from "lemmy-js-client";
import { Platform } from "react-native";

const baseUrl = "https://lemmy.ml/";
const client: LemmyHttp | null = new LemmyHttp(baseUrl);

const operatingSystem = Platform.OS;
const options = {
  headers: { "User-Agent": `Astro ${operatingSystem}` },
  fetchFunction: undefined,
};
export const getLemmyHttp = () => {
  return client;
};
