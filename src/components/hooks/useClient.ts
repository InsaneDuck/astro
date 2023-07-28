import { RootState } from "@/store/store";
import { LemmyHttp } from "lemmy-js-client";
import { useSelector } from "react-redux";

type UseClientProps = {};

export const useClient = () => {
  const user = useSelector((state: RootState) => state.auth.currentUser);
  const url = user?.serverUrl
    ? `https://${user.serverUrl}/`
    : `https://lemmy.world/`;
  return new LemmyHttp(url, {});
};
