import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

import { CommentsSorter } from "@/app/components/CommentsSorter";
import { ProfileHeaderRight } from "@/app/components/ProfileHeaderRight";
import { FeedSelector } from "@/app/components/ViewComponents/Feed/FeedSelector";
import { FeedServer } from "@/app/components/ViewComponents/Feed/FeedServer";
import { FeedSorter } from "@/app/components/ViewComponents/Feed/FeedSorter";
import { AccountSwitcherScreen } from "@/app/screens/SubStack/AccountSwitcherScreen";
import { AllCommunitiesScreen } from "@/app/screens/SubStack/AllCommunitiesScreen";
import { CommunityScreen } from "@/app/screens/SubStack/CommunityScreen";
import { InboxScreen } from "@/app/screens/SubStack/InboxScreen";
import { LoginModalScreen } from "@/app/screens/SubStack/LoginModalScreen";
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
  ExportImport: undefined;
  FaceIdAndPasscode: undefined;
  Filters: undefined;
  General: undefined;
  Inbox: undefined;
  LoginModal: undefined;
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
          headerLeft: FeedServer,
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
        children={UserScreen}
        options={{
          title: "User",
        }}
      />
      <SubStack.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          title: "Community",
        }}
      />
      <SubStack.Screen
        name="AllCommunities"
        component={AllCommunitiesScreen}
        options={{ title: "All Communities" }}
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
      <SubStack.Screen
        name="LoginModal"
        component={LoginModalScreen}
        options={{ presentation: "modal" }}
      />
      {props.initialRoute === "Settings" && (
        <>
          <SubStack.Screen name="Settings" children={Settings} />
          <SubStack.Screen name="General" children={General} />
          <SubStack.Screen name="Appearance" children={Appearance} />
          <SubStack.Screen name="Filters" children={Filters} />
          <SubStack.Screen
            name="FaceIdAndPasscode"
            children={FaceIdAndPasscode}
          />
          <SubStack.Screen name="Accounts" children={Accounts} />
          <SubStack.Screen name="ExportImport" children={ExportImport} />
          <SubStack.Screen name="About" children={About} />
          <SubStack.Screen name="Rate" children={Rate} />
          <SubStack.Screen name="Tip" children={Tip} />
        </>
      )}
    </SubStack.Navigator>
  );
};
