import React from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { Icon } from "@/common/Icon";
import { View } from "@/common/View";
import { RootState } from "@/store/store";
import { useThemeColor } from "@/theming/useThemeColor";

export const ImageViewer = () => {
  const imageUrls = useSelector((state: RootState) => state.shared.images);
  const deviceHeight = Dimensions.get("window").height;
  const backgroundColor = useThemeColor("borderColor");
  // const [height, setHeight] = useState(0);
  // useEffect(() => {
  //   const getImage = async () => {
  //     await Image.prefetch(imageUrls[0]);
  //   };
  //   //todo handle error
  //   getImage().catch((error) => console.log(error));
  // }, []);
  // const uri = Image.queryCache(imageUrls);

  const iconColor = useThemeColor("tint");
  const onSave = () => {};
  return (
    imageUrls && (
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ width: "100%", height: "100%" }}>
          <Image
            style={{
              width: "100%",
              height: deviceHeight * 0.8,
              objectFit: "contain",
            }}
            width={100}
            source={{ uri: imageUrls[0], cache: "force-cache" }}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            borderRadius: 10,
            backgroundColor,
          }}
        >
          <TouchableOpacity onPress={onSave} style={{ padding: 8 }}>
            <Icon icon="save" color={iconColor} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 8 }}>
            <Icon icon="arrow-up-from-bracket" color={iconColor} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};
