import {
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from "@react-navigation/core";
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import { CommunityButtons } from "@/app/components/Community/CommunityButtons";
import { FeedAccount } from "@/app/components/Feed/FeedAccount";
import { FeedSelector } from "@/app/components/Feed/FeedSelector";
import { FeedSorter } from "@/app/components/Feed/FeedSorter";
import { ProfileHeaderRight } from "@/app/components/Person/ProfileHeaderRight";
import { CommentsSorter } from "@/app/components/Post/Comment/CommentsSorter";
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
import { About } from "@/app/screens/SubStack/Settings/About";
import { Accounts } from "@/app/screens/SubStack/Settings/Accounts";
import { Appearance } from "@/app/screens/SubStack/Settings/Appearance";
import { ExportImport } from "@/app/screens/SubStack/Settings/ExportImport";
import { FaceIdAndPasscode } from "@/app/screens/SubStack/Settings/FaceIdAndPasscode";
import { Filters } from "@/app/screens/SubStack/Settings/Filters";
import { General } from "@/app/screens/SubStack/Settings/General";
import { Rate } from "@/app/screens/SubStack/Settings/Rate";
import { Settings } from "@/app/screens/SubStack/Settings/Settings";
import { Tip } from "@/app/screens/SubStack/Settings/Tip";
import { UserScreen } from "@/app/screens/SubStack/UserScreen";
import { SubStackParamsList } from "@/router/SubStackLayout";

type ScreenProps = RouteConfig<
  SubStackParamsList,
  keyof SubStackParamsList,
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
>;

export const screens: Record<keyof SubStackParamsList, ScreenProps> = {
  About: {
    name: "About",
    component: About,
  },
  Accounts: {
    name: "Accounts",
    component: Accounts,
  },
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
    options: { title: "Communities" },
  },
  Appearance: {
    component: Appearance,
    name: "Appearance",
  },
  Community: {
    component: CommunityScreen,
    name: "Community",
    options: {
      title: "Community",
      headerRight: CommunityButtons,
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
  Rate: {
    component: Rate,
    name: "Rate",
  },
  Search: {
    component: SearchScreen,
    name: "Search",
  },
  Settings: {
    component: Settings,
    name: "Settings",
  },
  Tip: {
    component: Tip,
    name: "Tip",
  },
  User: {
    component: UserScreen,
    name: "User",
    options: {
      title: "User",
    },
  },
};
