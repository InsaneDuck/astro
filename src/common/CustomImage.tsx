import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { Image as DefaultImage, TouchableOpacity } from "react-native";
import { ImageURISource } from "react-native/Libraries/Image/ImageSource";
import { useDispatch } from "react-redux";

import { MainStackNavigation } from "@/router/MainStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch } from "@/store/store";
import { Press } from "@/theming/Themed";

type ImageProps = {
  onPress?: Press;
} & DefaultImage["props"];

export const CustomImage: FC<ImageProps> = (props) => {
  const { source, onPress, ...otherProps } = props;

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<MainStackNavigation>();

  //todo
  function isImageURISource(obj: any): obj is ImageURISource {
    return obj.uri !== undefined;
  }

  const onImagePress = (): any => {
    const hello = isImageURISource(source);
    console.log("source " + source + " yes? = " + hello);
    if (hello) {
      console.log("here");
      if (source.uri) {
        dispatch(sharedActions.setImages([source.uri]));
        navigation.navigate("ImageViewer");
      }
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress ? onPress : onImagePress}
      style={{ width: "auto", height: "auto" }}
    >
      <DefaultImage source={source} {...otherProps} />
    </TouchableOpacity>
  );
};
