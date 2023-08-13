import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

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

type SubStackLayoutProps = {
  initialRoute: keyof SubStackParamsList;
};
type SubStackParamsList = {
  About: undefined;
  Accounts: undefined;
  AccountSwitcher: undefined;
  AllCommunities: undefined;
  Appearance: undefined;
  Community: undefined;
  CommunityInfo: undefined;
  CreatePost: undefined;
  ExportImport: undefined;
  FaceIdAndPasscode: undefined;
  Filters: undefined;
  General: undefined;
  Inbox: undefined;
  Login: undefined;
  MainFeed: undefined;
  Post: undefined;
  Profile: undefined;
  ProfileSettings: undefined;
  Rate: undefined;
  Search: undefined;
  Settings: undefined;
  Tip: undefined;
  User: undefined;
};
export type SubStackNavigation = NativeStackNavigationProp<SubStackParamsList>;
const SubStack = createNativeStackNavigator<SubStackParamsList>();
export const SubStackLayout: FC<SubStackLayoutProps> = (props) => {
  return (
    <SubStack.Navigator initialRouteName={props.initialRoute}>
      <SubStack.Screen
        name="AccountSwitcher"
        component={AccountSwitcherScreen}
        options={{
          title: "Select Account",
          presentation: "modal",
        }}
      />
      <SubStack.Screen
        name="MainFeed"
        component={MainFeedScreen}
        options={{
          title: "Feed",
          headerLeft: FeedAccount,
          headerRight: FeedSorter,
          headerTitle: FeedSelector,
        }}
      />
      <SubStack.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerRight: CommentsSorter,
        }}
      />
      <SubStack.Screen
        name="User"
        component={UserScreen}
        options={{
          title: "User",
        }}
      />
      <SubStack.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          title: "Community",
          headerRight: CommunityButtons,
        }}
      />
      <SubStack.Screen
        name="CommunityInfo"
        component={CommunityInfoScreen}
        options={{
          title: "Info",
        }}
      />
      <SubStack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          title: "Create Post",
        }}
      />
      <SubStack.Screen
        name="AllCommunities"
        component={AllCommunitiesScreen}
        options={{ title: "Communities" }}
      />
      <SubStack.Screen name="Search" component={SearchScreen} />
      <SubStack.Screen name="Inbox" component={InboxScreen} />
      <SubStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: ProfileHeaderRight,
        }}
      />
      <SubStack.Screen
        name="ProfileSettings"
        component={ProfileSettingsScreen}
      />
      <SubStack.Screen name="Login" component={LoginScreen} />
      {props.initialRoute === "Settings" && (
        <>
          <SubStack.Screen name="Settings" component={Settings} />
          <SubStack.Screen name="General" component={General} />
          <SubStack.Screen name="Appearance" component={Appearance} />
          <SubStack.Screen name="Filters" component={Filters} />
          <SubStack.Screen
            name="FaceIdAndPasscode"
            component={FaceIdAndPasscode}
            options={{
              title: "Face ID & Passcode",
            }}
          />
          <SubStack.Screen name="Accounts" component={Accounts} />
          <SubStack.Screen
            name="ExportImport"
            component={ExportImport}
            options={{ title: "Export/Import" }}
          />
          <SubStack.Screen name="About" component={About} />
          <SubStack.Screen name="Rate" component={Rate} />
          <SubStack.Screen name="Tip" component={Tip} />
        </>
      )}
    </SubStack.Navigator>
  );
};
