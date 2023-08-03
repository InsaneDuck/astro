import { OptionsItem } from "@/components/app/OptionsItem";
import { View } from "@/components/common/View";
import { SettingsNavigation, SettingsRoutes } from "@/constants/Navigation";
import { useNavigation } from "@react-navigation/core";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

type SettingsProps = {};

export const Settings: FC<SettingsProps> = () => {
  const navigation = useNavigation<SettingsNavigation>();
  return (
    <>
      <View style={styles.container}>
        <OptionsItem icon={"info-circle"} title={"General"} />
        <OptionsItem
          icon={"palette"}
          title={"Appearance"}
          onPress={() => navigation.navigate(SettingsRoutes.Appearance)}
        />
        <OptionsItem icon={"filter"} title={"Filters"} />
        <OptionsItem title={"Face ID & Passcode"} icon={"lock"} />
        <OptionsItem title={"Accounts"} icon={"user"} />
        <OptionsItem icon={"file-export"} title={"Export/Import"} />
      </View>

      <View style={styles.container}>
        <OptionsItem icon={"info-circle"} title={"About"} />
        <OptionsItem icon={"star"} title={"Rate"} />
        <OptionsItem icon={"dollar"} title={"Tip"} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    margin: 20,
    overflow: "hidden",
  },
});
