import React, { FC } from "react";

import { Button } from "@/common/Button";
import { CustomImage } from "@/common/CustomImage";
import { View } from "@/common/View";
import { Press } from "@/theming/Themed";

//todo make onEdit mandatory
type BannerProps = {
  onEdit?: Press;
  banner: string;
};
export const Banner: FC<BannerProps> = (props) => {
  return (
    <View
      style={{
        width: "100%",
        height: 200,
        overflow: "hidden",
      }}
    >
      <CustomImage
        source={{ uri: props.banner }}
        style={{ width: "100%", height: "100%" }}
      />
      <Button type="edit" onPress={props.onEdit} />
    </View>
  );
};
