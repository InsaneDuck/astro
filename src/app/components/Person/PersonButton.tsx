import { useNavigation } from "@react-navigation/core";
import { Person } from "lemmy-js-client";
import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { useDispatch } from "react-redux";

import { CustomImage } from "@/common/CustomImage";
import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch } from "@/store/store";
import { ConstantColors } from "@/theming/Colors";
import { useThemeColor } from "@/theming/useThemeColor";

type PersonButtonProps = {
  person: Person;
  style?: StyleProp<ViewStyle>;
};

//todo show tags like mod?, op?
export const PersonButton: FC<PersonButtonProps> = (props) => {
  const { person } = props;
  const tabIconDefault = useThemeColor("tabIconDefault");
  const navigation = useNavigation<SubStackNavigation>();
  const dispatch = useDispatch<AppDispatch>();

  const goToUser = (): any => {
    dispatch(sharedActions.setClickedPerson(person));
    navigation.navigate("User");
  };

  return (
    <TouchableOpacity
      onPress={goToUser}
      style={[styles.container, props.style]}
    >
      <View style={styles.imageContainer}>
        {person.avatar ? (
          <CustomImage source={{ uri: person.avatar }} style={styles.image} />
        ) : (
          <Icon
            icon="user"
            color={tabIconDefault}
            size={18}
            style={styles.image}
          />
        )}
      </View>

      <Text
        style={{
          fontSize: 18,
          paddingLeft: 3,
          color: ConstantColors.iosBlue,
        }}
      >
        {person.display_name ? person.display_name : person.name}
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
