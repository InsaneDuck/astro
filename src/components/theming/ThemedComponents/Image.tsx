import { Press } from "@/components/theming/Themed";
import React, { FC, useEffect, useState } from "react";
import {
  Dimensions,
  Image as DefaultImage,
  Pressable,
  StyleSheet,
} from "react-native";

type ImageProps = {
  onPress?: Press;
} & DefaultImage["props"];

const Image: FC<ImageProps> = (props) => {
  const { onPress, source, ...otherProps } = props;
  const screenWidth = Dimensions.get("window").width;
  const [height, setHeight] = useState(0);
  let isMounted = true;
  useEffect(() => {
    if ((source as any).uri) {
      DefaultImage.getSize((source as any).uri, (newWidth, newHeight) => {
        if (!isMounted) {
          return;
        }
        const height = (screenWidth * newHeight) / newWidth;
        setHeight(height);
      });
    }
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

export default Image;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
  },
});
