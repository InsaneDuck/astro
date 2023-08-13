import { Settings } from "@/types/Settings";

export const defaultSettings: Settings = {
  id: 0,
  General: {
    feed: {
      allowNSFW: false,
      blurNSFW: true,
      feedSort: "Active",
    },
    post: {},
    comments: {
      commentSort: "Hot",
      tapToCollapse: false,
    },
    community: {
      communitySort: "Active",
    },
    haptics: {
      haptics: true,
    },
  },
  Appearance: {
    feed: {
      hideUserName: false,
      hideCommunityName: false,
      postSize: "expanded",
    },
    post: {
      hideUserName: false,
      hideCommunityName: false,
    },
    showUserNameInTabBar: false,
    theme: "dark",
  },
  Accounts: {
    allUsers: [],
    currentUser: {
      id: 0,
      serverUrl: "https://lemmy.world/",
    },
  },
  Filters: {
    keywords: [],
    communities: [],
    users: [],
  },
  FaceIdPasscode: {
    faceId: false,
    passcode: false,
  },
  ExportImport: {
    data: {},
  },
};
