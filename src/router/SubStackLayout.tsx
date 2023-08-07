import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, { FC } from "react";

import { LoginSignUp } from "@/app/components/LoginSignUp";
import { CommunityViewComponent } from "@/app/components/ViewComponents/CommunityViewComponent";
import { FeedSorter } from "@/app/components/ViewComponents/Feed/FeedSorter";
import { CommentsSorter } from "@/app/components/ViewComponents/FullPost/CommentsSorter";
import { UserViewComponent } from "@/app/components/ViewComponents/UserViewComponent";
import { Inbox } from "@/app/screens/Inbox/Inbox";
import { MainFeed } from "@/app/screens/MainFeed";
import { Post } from "@/app/screens/Post/Post";
import { Profile } from "@/app/screens/Profile/Profile";
import { ProfileHeaderRight } from "@/app/screens/Profile/ProfileHeaderRight";
import { ProfileSettings } from "@/app/screens/Profile/ProfileSettings";
import { AllCommunities } from "@/app/screens/Search/AllCommunities";
import { Search } from "@/app/screens/Search/Search";
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

type SubStackLayoutProps = {
  initialRoute: keyof SubStackParamsList;
};
type SubStackParamsList = {
  Feed: undefined;
  Post: undefined;
  User: undefined;
  Community: undefined;
  AllCommunities: undefined;
  Search: undefined;
  Inbox: undefined;
  Profile: undefined;
  ProfileSettings: undefined;
  LoginModal: undefined;
  Settings: undefined;
  General: undefined;
  Appearance: undefined;
  Filters: undefined;
  FaceIdAndPasscode: undefined;
  Accounts: undefined;
  ExportImport: undefined;
  About: undefined;
  Rate: undefined;
  Tip: undefined;
};
export type SubStackNavigation = NativeStackNavigationProp<SubStackParamsList>;
const SubStack = createNativeStackNavigator<SubStackParamsList>();
export const SubStackLayout: FC<SubStackLayoutProps> = (props) => {
  return (
    <SubStack.Navigator initialRouteName={props.initialRoute}>
      <SubStack.Screen
        name="Feed"
        component={MainFeed}
        options={{
          title: "Feed",
          headerRight: FeedSorter,
        }}
      />
      <SubStack.Screen
        name="Post"
        component={Post}
        options={{
          headerRight: CommentsSorter,
        }}
      />
      <SubStack.Screen
        name="User"
        children={() => <UserViewComponent userType="clicked" />}
        options={{
          title: "User",
        }}
      />
      <SubStack.Screen
        name="Community"
        component={CommunityViewComponent}
        options={{
          title: "Community",
        }}
      />
      <SubStack.Screen
        name="AllCommunities"
        component={AllCommunities}
        options={{ title: "All Communities" }}
      />
      <SubStack.Screen name="Search" component={Search} />
      <SubStack.Screen name="Inbox" component={Inbox} />
      <SubStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: ProfileHeaderRight,
        }}
      />
      <SubStack.Screen name="ProfileSettings" component={ProfileSettings} />
      <SubStack.Screen
        name="LoginModal"
        component={LoginSignUp}
        options={{ presentation: "modal" }}
      />
      <SubStack.Screen name="Settings" children={Settings} />
      <SubStack.Screen name="General" children={General} />
      <SubStack.Screen name="Appearance" children={Appearance} />
      <SubStack.Screen name="Filters" children={Filters} />
      <SubStack.Screen name="FaceIdAndPasscode" children={FaceIdAndPasscode} />
      <SubStack.Screen name="Accounts" children={Accounts} />
      <SubStack.Screen name="ExportImport" children={ExportImport} />
      <SubStack.Screen name="About" children={About} />
      <SubStack.Screen name="Rate" children={Rate} />
      <SubStack.Screen name="Tip" children={Tip} />
    </SubStack.Navigator>
  );
};
