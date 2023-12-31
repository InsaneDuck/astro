import { useNavigation } from "@react-navigation/core";
import { Person } from "lemmy-js-client";
import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { CustomImage } from "@/common/CustomImage";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";
import { sharedActions } from "@/store/shared-slice";
import { useAppDispatch } from "@/store/store";
import { ConstantColors } from "@/theming/Colors";

type PersonButtonProps = {
  person: Person;
  style?: StyleProp<ViewStyle>;
};

//todo show tags like mod?, op?
export const PersonButton: FC<PersonButtonProps> = (props) => {
  const { person } = props;
  const navigation = useNavigation<SubStackNavigation>();
  const dispatch = useAppDispatch();

  const goToUser = (): any => {
    dispatch(sharedActions.setClickedPerson(person));
    navigation.navigate("User");
  };

  return (
    <TouchableOpacity
      onPress={goToUser}
      style={[styles.container, props.style]}
    >
      {person.avatar && (
        <View style={styles.imageContainer}>
          <CustomImage source={{ uri: person.avatar }} style={styles.image} />
        </View>
      )}

      <Text
        style={{
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
    marginRight: 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
