import React, { FC } from "react";

import { Text } from "@/common/Text";
import { View } from "@/common/View";

type GeneralProps = object;

export const General: FC<GeneralProps> = (props) => {
  return (
    <View>
      <Text>General</Text>
    </View>
  );
};
