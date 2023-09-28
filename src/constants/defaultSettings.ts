import { Settings } from "@/types/Settings";

export const defaultSettings: Settings = {
  id: 0,
  General: {
    feed: {
      allowNSFW: false,
      blurNSFW: true,
      feedSort: "Active",
      feedType: "Subscribed",
      hideReadPosts: false,
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
