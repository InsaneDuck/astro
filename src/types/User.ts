export type User = {
  id: number;
  userName?: string;
  password?: string;
  jwt?: string;
  serverUrl: string;
  authStatus: "loggedIn" | "anonymous" | "local";
};
