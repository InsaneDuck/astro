export function getBaseDomainFromUrl(inputUrl: string) {
  // Remove the protocol part of the URL (e.g., "https://")
  const urlWithoutProtocol = inputUrl.replace(/^(https?:\/\/)?/, "");

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
