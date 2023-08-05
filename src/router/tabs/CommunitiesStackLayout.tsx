import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";

import { AllCommunities } from "@/app/screens/Search/AllCommunities";
import { CommunityViewComponent } from "@/components/app/ViewComponents/CommunityViewComponent";

type CommunitiesStackLayoutProps = object;

type CommunityStackParamsList = {
  AllCommunities: undefined;
  Community: undefined;
};

const CommunitiesStack = createNativeStackNavigator<CommunityStackParamsList>();
export const CommunitiesStackLayout: FC<CommunitiesStackLayoutProps> = (
  props,
) => {
  return (
    <CommunitiesStack.Navigator>
      <CommunitiesStack.Screen
        name="AllCommunities"
        component={AllCommunities}
        options={{ title: "All Communities" }}
      />
      <CommunitiesStack.Screen
        name="Community"
        component={CommunityViewComponent}
      />
    </CommunitiesStack.Navigator>
  );
};
