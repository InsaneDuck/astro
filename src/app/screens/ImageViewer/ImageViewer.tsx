import React from "react";
import { Dimensions, Image } from "react-native";
import { useSelector } from "react-redux";

import { View } from "@/components/common/View";
import { RootState } from "@/store/store";

export const ImageViewer = () => {
  const imageUrls = useSelector((state: RootState) => state.image.image);
  const deviceHeight = Dimensions.get("window").height;
  // const [height, setHeight] = useState(0);
  // useEffect(() => {
  //   const getImage = async () => {
  //     await Image.prefetch(imageUrls[0]);
  //   };
  //   //todo handle error
  //   getImage().catch((error) => console.log(error));
  // }, []);
  // const uri = Image.queryCache(imageUrls);
  return (
    imageUrls && (
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
    )
  );
};
