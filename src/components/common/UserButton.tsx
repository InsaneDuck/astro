import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/themed-components/Text";
import { MainNavigation, MainRoutes } from "@/constants/Navigation";
import { AppDispatch } from "@/store/store";
import { userActions } from "@/store/user-slice";
import { useThemeColor } from "@/theming/useThemeColor";
import { useNavigation } from "@react-navigation/core";
import { Person } from "lemmy-js-client";
import React, { FC } from "react";
import { Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

type UserButtonProps = {
  creator: Person;
};

//todo show tags like mod?, op?
export const UserButton: FC<UserButtonProps> = (props) => {
  const { creator } = props;
  const textColor = useThemeColor("text");
  const borderColor = useThemeColor("borderColor");
  const navigation = useNavigation<MainNavigation>();
  const dispatch = useDispatch<AppDispatch>();
  const goToUser = (): any => {
    dispatch(userActions.setUser(creator));
    navigation.navigate(MainRoutes.User);
  };
  return (
    <TouchableOpacity
      onPress={goToUser}
      style={{
        backgroundColor: borderColor,
        borderRadius: 5,
        padding: 3,
        paddingLeft: 5,
        paddingRight: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {creator.avatar ? (
        <Image
          source={{ uri: creator.avatar }}
          width={20}
          height={20}
          style={{ borderRadius: 5 }}
        />
      ) : (
        <Icon
          icon={"user"}
          color={textColor}
          size={18}
          style={{ marginBottom: 1.5 }}
        />
      )}
      <Text
        style={{
          fontSize: 18,
          marginLeft: 5,
        }}
      >
        {creator.name}
      </Text>
    </TouchableOpacity>
  );
};
