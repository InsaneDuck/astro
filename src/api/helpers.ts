import { LemmyHttp } from "lemmy-js-client";
import moment from "moment";

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
  return hostnameParts.slice(-2).join(".");
}

export function formatTimeToDuration(isoTime: moment.MomentInput) {
  const currentTime = moment();
  const providedTime = moment(isoTime);

  const timeDifference = currentTime.diff(providedTime);
  const duration = moment.duration(timeDifference).abs();

  if (duration.asSeconds() < 60) {
    return Math.floor(duration.asSeconds()) + "s";
  } else if (duration.asMinutes() < 60) {
    return Math.floor(duration.asMinutes()) + "m";
  } else if (duration.asHours() < 24) {
    return Math.floor(duration.asHours()) + "h";
  } else if (duration.asDays() < 30) {
    return Math.floor(duration.asDays()) + "d";
  } else if (duration.asMonths() < 12) {
    return Math.floor(duration.asMonths()) + "M";
  } else {
    return Math.floor(duration.asYears()) + "y";
  }
}
