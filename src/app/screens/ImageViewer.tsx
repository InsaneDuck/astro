import React, { FC } from "react";
import { Image } from "react-native";

type ImageViewerProps = {};

const ImageViewer: FC<ImageViewerProps> = (props) => {
  return <Image source={{ uri: "" }} />;
};

export default ImageViewer;
