import React, { FC } from "react";
import { Image } from "react-native";

import { ImageEditButton } from "@/app/components/ImageEditButton";
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
      <Image
        source={{ uri: props.banner }}
        style={{ width: "100%", height: "100%" }}
      />
      <ImageEditButton onPress={props.onEdit} />
    </View>
  );
};
