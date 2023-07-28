import { Press } from "@/theming/Themed";
import React, { FC, useEffect, useState } from "react";
import { Dimensions, Image as DefaultImage, Pressable } from "react-native";

type ImageProps = {
  onPress?: Press;
} & DefaultImage["props"];

export const Image: FC<ImageProps> = (props) => {
  const { onPress, source, ...otherProps } = props;
  if ((source as any).uri.endsWith("mp4")) {
    return <></>;
  }
  const screenWidth = Dimensions.get("window").width;
  const [height, setHeight] = useState(0);
  let isMounted = true;
  useEffect(() => {
    const fetchImageDimensions = async () => {
      if ((source as any).uri) {
        await DefaultImage.getSize(
          (source as any).uri,
          (newWidth, newHeight) => {
            if (!isMounted) {
              return;
            }
            const height = (screenWidth * newHeight) / newWidth;
            setHeight(height);
          },
        );
      }
    };
    fetchImageDimensions();
    return () => {
      isMounted = false;
    };
  }, []);
  return height === 0 ? null : (
    <Pressable onPress={onPress}>
      <DefaultImage
        source={source}
        style={{
          width: "100%",
          height: height,
        }}
        resizeMode="contain"
        {...otherProps}
      />
    </Pressable>
  );
};
