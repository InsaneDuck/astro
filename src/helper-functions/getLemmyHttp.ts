import { LemmyHttp } from "lemmy-js-client";
import { Platform } from "react-native";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

//const baseUrl = "https://lemmy.ml/";

const operatingSystem = Platform.OS;
const options = {
  headers: { "User-Agent": `Astro ${operatingSystem}` },
  fetchFunction: undefined,
};
let client: LemmyHttp | null = null;
export const getLemmyHttp = (baseUrl: string) => {
  client = new LemmyHttp(baseUrl);
  return client;
};

const useGetLemmyHttp = () => {
  const url = useSelector(
    (state: RootState) =>
      state.settings.currentSettings.Accounts.currentUser.serverUrl,
  );
};
