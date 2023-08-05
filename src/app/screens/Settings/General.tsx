import React, { FC } from "react";

import { Text } from "@/components/common/Text";
import { View } from "@/components/common/View";

type GeneralProps = object;

export const General: FC<GeneralProps> = (props) => {
  return (
    <View>
      <Text>General</Text>
    </View>
  );
};
