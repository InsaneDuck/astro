import { CommentSortType, ListingType, SortType } from "lemmy-js-client";

import { PostSize } from "@/types/PostSize";
import { Theme } from "@/types/Theme";
import { User } from "@/types/User";

export type Settings = {
  id: number | string;
  General: SettingsGeneral;
  Appearance: SettingsAppearance;
  Filters: SettingsFilters;
  FaceIdPasscode: SettingsFaceIdPasscode;
  Accounts: SettingsAccounts;
  ExportImport: SettingsExportImport;
};
export type SettingsGeneral = {
  feed: {
    allowNSFW: boolean;
    blurNSFW: boolean;
    feedSort: SortType;
    feedType: ListingType;
    hideReadPosts: boolean;
  };
  post: object;
  comments: {
    commentSort: CommentSortType;
    tapToCollapse: boolean;
  };
  community: {
    communitySort: SortType;
  };
  haptics: {
    haptics: boolean;
  };
};

export type SettingsAppearance = {
  showUserNameInTabBar: boolean;
  theme: Theme;
  post: {
    hideUserName: boolean;
    hideCommunityName: boolean;
  };
  feed: {
    hideUserName: boolean;
    hideCommunityName: boolean;
    postSize: PostSize;
  };
};

export type SettingsFilters = {
  keywords: string[];
  communities: string[];
  users: string[];
};

export type SettingsFaceIdPasscode = {
  faceId: boolean;
  passcode: boolean;
};

export type SettingsAccounts = {
  allUsers: User[];
  currentUser: User;
};

export type SettingsExportImport = {
  data: object;
};
