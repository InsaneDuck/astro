import { LemmyHttp } from "lemmy-js-client";
import { Platform } from "react-native";

let client: LemmyHttp | null = null;
const baseUrl = "https://lemmy.ml/";
const operatingSystem = Platform.OS;

export const getLemmyHttp = () => {
  client = new LemmyHttp(baseUrl, {
    headers: { "User-Agent": `Memmy ${operatingSystem}` },
  });
  return client;
};
