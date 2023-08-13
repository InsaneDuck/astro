import React from "react";

import { List } from "@/app/components/List/List";
import { Toggle } from "@/app/components/List/Toggle";
import { View } from "@/common/View";

export const FaceIdAndPasscode = () => {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <List title="SECURITY" description="Lock app using Face ID or Passcode">
        <Toggle name="Face ID" />
        <Toggle name="Passcode" />
      </List>
    </View>
  );
};
