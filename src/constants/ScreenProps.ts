import {
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from "@react-navigation/core";
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { AllCommunitiesHeader } from "@/app/components/Community/Headers/AllCommunitiesHeader";
import { CommunityHeaderRight } from "@/app/components/Community/Headers/CommunityHeaderRight";
import { FeedAccount } from "@/app/components/Feed/Headers/FeedAccount";
import { FeedSelector } from "@/app/components/Feed/Headers/FeedSelector";
import { FeedSorter } from "@/app/components/Feed/Headers/FeedSorter";
import { ProfileHeaderRight } from "@/app/components/Person/Headers/ProfileHeaderRight";
import { CommentsSorter } from "@/app/components/Post/FullPost/Header/CommentsSorter";
import { SearchTypeSelector } from "@/app/components/Search/SearchTypeSelector";
import { About } from "@/app/screens/Settings/About";
import { Accounts } from "@/app/screens/Settings/Accounts";
import { Appearance } from "@/app/screens/Settings/Appearance";
import { ExportImport } from "@/app/screens/Settings/ExportImport";
import { FaceIdAndPasscode } from "@/app/screens/Settings/FaceIdAndPasscode";
import { Filters } from "@/app/screens/Settings/Filters";
import { General } from "@/app/screens/Settings/General";
import { Rate } from "@/app/screens/Settings/Rate";
import { Settings } from "@/app/screens/Settings/Settings";
import { Tip } from "@/app/screens/Settings/Tip";
import { AccountSwitcherScreen } from "@/app/screens/SubStack/AccountSwitcherScreen";
import { AllCommunitiesScreen } from "@/app/screens/SubStack/AllCommunitiesScreen";
import { CommunityInfoScreen } from "@/app/screens/SubStack/CommunityInfoScreen";
import { CommunityScreen } from "@/app/screens/SubStack/CommunityScreen";
import { CreatePostScreen } from "@/app/screens/SubStack/CreatePostScreen";
import { InboxScreen } from "@/app/screens/SubStack/InboxScreen";
import { LoginScreen } from "@/app/screens/SubStack/LoginScreen";
import { MainFeedScreen } from "@/app/screens/SubStack/MainFeedScreen";
import PostScreen from "@/app/screens/SubStack/PostScreen";
import { ProfileScreen } from "@/app/screens/SubStack/ProfileScreen";
import { ProfileSettingsScreen } from "@/app/screens/SubStack/ProfileSettingsScreen";
import { SearchScreen } from "@/app/screens/SubStack/SearchScreen";
import { UserScreen } from "@/app/screens/SubStack/UserScreen";

export type SharedParamsList = {
  AccountSwitcher: undefined;
  AllCommunities: undefined;
  Community: undefined;
  CommunityInfo: undefined;
  CreatePost: undefined;
  Inbox: undefined;
  Login: undefined;
  MainFeed: undefined;
  Post: undefined;
  Profile: undefined;
  ProfileSettings: undefined;
  Search: undefined;
  User: undefined;
};
export type SettingsParamsList = {
  About: undefined;
  Accounts: undefined;
  Appearance: undefined;
  ExportImport: undefined;
  FaceIdAndPasscode: undefined;
  Filters: undefined;
  General: undefined;
  Rate: undefined;
  Settings: undefined;
  Tip: undefined;
};
export type SubStackParamsList = SharedParamsList & SettingsParamsList;
type ScreenProps = RouteConfig<
  SubStackParamsList,
  keyof SubStackParamsList,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>;
export const settings: Record<keyof SettingsParamsList, ScreenProps> = {
  Rate: {
    component: Rate,
    name: "Rate",
  },

  Settings: {
    component: Settings,
    name: "Settings",
  },
  Tip: {
    component: Tip,
    name: "Tip",
  },
  Accounts: {
    name: "Accounts",
    component: Accounts,
  },
  About: {
    name: "About",
    component: About,
  },
  Appearance: {
    component: Appearance,
    name: "Appearance",
  },
  ExportImport: {
    component: ExportImport,
    name: "ExportImport",
    options: { title: "Export/Import" },
  },
  FaceIdAndPasscode: {
    component: FaceIdAndPasscode,
    name: "FaceIdAndPasscode",
    options: {
      title: "Face ID & Passcode",
    },
  },
  Filters: {
    component: Filters,
    name: "Filters",
  },
  General: {
    component: General,
    name: "General",
  },
};
export const shared: Record<keyof SharedParamsList, ScreenProps> = {
  AccountSwitcher: {
    component: AccountSwitcherScreen,
    name: "AccountSwitcher",
    options: {
      title: "Select Account",
      presentation: "modal",
    },
  },

  AllCommunities: {
    component: AllCommunitiesScreen,
    name: "AllCommunities",
    options: { title: "Communities", headerTitle: AllCommunitiesHeader },
  },
  Search: {
    component: SearchScreen,
    name: "Search",
    options: {
      headerTitle: SearchTypeSelector,
    },
  },
  Community: {
    component: CommunityScreen,
    name: "Community",
    options: {
      title: "Community",
      headerRight: CommunityHeaderRight,
    },
  },
  CommunityInfo: {
    component: CommunityInfoScreen,
    name: "CommunityInfo",
    options: {
      title: "Info",
    },
  },
  CreatePost: {
    component: CreatePostScreen,
    name: "CreatePost",
    options: {
      title: "Create Post",
    },
  },

  Inbox: {
    component: InboxScreen,
    name: "Inbox",
  },
  Login: {
    component: LoginScreen,
    name: "Login",
  },
  MainFeed: {
    component: MainFeedScreen,
    name: "MainFeed",
    options: {
      title: "Feed",
      headerLeft: FeedAccount,
      headerRight: FeedSorter,
      headerTitle: FeedSelector,
    },
  },
  Post: {
    component: PostScreen,
    name: "Post",
    options: {
      headerRight: CommentsSorter,
    },
  },
  Profile: {
    component: ProfileScreen,
    name: "Profile",
    options: {
      headerRight: ProfileHeaderRight,
    },
  },
  ProfileSettings: {
    component: ProfileSettingsScreen,
    name: "ProfileSettings",
  },

  User: {
    component: UserScreen,
    name: "User",
    options: {
      title: "User",
    },
  },
};
