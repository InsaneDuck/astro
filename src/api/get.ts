import { LemmyHttp } from "lemmy-js-client";

export const getLemmyHttp = () => {
  let baseUrl = "https://lemmy.ml/";
  return new LemmyHttp(baseUrl, {});
};

export function getBaseDomainFromUrl(inputUrl: string) {
  // Remove the protocol part of the URL (e.g., "https://")
  let urlWithoutProtocol = inputUrl.replace(/^(https?:\/\/)?/, "");

  // Remove any path or query parameters from the URL
  let urlWithoutPathAndQuery = urlWithoutProtocol.split("/")[0];

  // If the URL starts with 'www.', remove it
  if (urlWithoutPathAndQuery.startsWith("www.")) {
    urlWithoutPathAndQuery = urlWithoutPathAndQuery.slice(4);
  }

  // Split the remaining part by '.' and get the last two parts
  const hostnameParts = urlWithoutPathAndQuery.split(".");
  const baseDomain = hostnameParts.slice(-2).join(".");

  return baseDomain;
}
