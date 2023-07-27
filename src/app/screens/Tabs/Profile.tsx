import View from "@/components/theming/ThemedComponents/View";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type ProfileProps = {};

const Profile: FC<ProfileProps> = (props) => {
  return <View style={styles.container}></View>;
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
