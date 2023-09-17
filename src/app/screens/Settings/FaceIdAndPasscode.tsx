import React from "react";
import { useSelector } from "react-redux";

import { Form } from "@/common/Form/Form";
import { FormToggle } from "@/common/Form/FormToggle";
import { View } from "@/common/View";
import { RootState } from "@/store/store";

export const FaceIdAndPasscode = () => {
  const security = useSelector(
    (state: RootState) => state.settings.currentSettings.FaceIdPasscode,
  );

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Form title="SECURITY" description="Lock app using Face ID or Passcode">
        <FormToggle name="Face ID" value={security.faceId} />
        <FormToggle name="Passcode" value={security.passcode} />
      </Form>
    </View>
  );
};
