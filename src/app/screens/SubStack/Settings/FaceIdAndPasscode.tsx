import React from "react";
import { useSelector } from "react-redux";

import { List } from "@/app/components/List/List";
import { Toggle } from "@/app/components/List/Toggle";
import { View } from "@/common/View";
import { RootState } from "@/store/store";

export const FaceIdAndPasscode = () => {
  const security = useSelector(
    (state: RootState) => state.settings.defaultSettings.FaceIdPasscode,
  );

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <List title="SECURITY" description="Lock app using Face ID or Passcode">
        <Toggle name="Face ID" value={security.faceId} />
        <Toggle name="Passcode" value={security.passcode} />
      </List>
    </View>
  );
};
