import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { View } from "@/components/common/View";
import { ConstantColors } from "@/components/theming/Colors";
import { useThemeColor } from "@/components/theming/useThemeColor";
import { FeedStackNavigation } from "@/router/tabs/FeedStackLayout";
import { AppDispatch } from "@/store/store";
import { userActions } from "@/store/user-slice";
import { useNavigation } from "@react-navigation/core";
import { Person } from "lemmy-js-client";
import React, { FC } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

type UserButtonProps = {
  creator: Person;
};

//todo show tags like mod?, op?
export const UserButton: FC<UserButtonProps> = (props) => {
  const { creator } = props;
  const textColor = useThemeColor("text");
  const navigation = useNavigation<FeedStackNavigation>();
  const dispatch = useDispatch<AppDispatch>();
  const goToUser = (): any => {
    dispatch(userActions.setUser(creator));
    navigation.navigate("User");
  };
  return (
    <TouchableOpacity onPress={goToUser} style={styles.container}>
      <View style={styles.imageContainer}>
        {creator.avatar ? (
          <Image source={{ uri: creator.avatar }} style={styles.image} />
        ) : (
          <Icon
            icon={"user"}
            color={textColor}
            size={18}
            style={styles.image}
          />
        )}
      </View>

      <Text
        style={{
          fontSize: 18,
          marginLeft: 5,
          color: ConstantColors.iosBlue,
        }}
      >
        {creator.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 20,
    height: 20,
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});