import React from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { List } from "@/app/components/List/List";
import { ListSelect } from "@/app/components/List/ListSelect";
import { Toggle } from "@/app/components/List/Toggle";
import { View } from "@/common/View";
import { AppDispatch, RootState } from "@/store/store";

export const Appearance = () => {
  const appearanceSettings = useSelector(
    (state: RootState) => state.settings.defaultSettings.Appearance,
  );

  const dispatch = useDispatch<AppDispatch>();

  const ThemeSection = () => {
    return (
      <List title="THEME">
        <ListSelect name="Dark Mode" selected={appearanceSettings.theme} />
      </List>
    );
  };

  const PostSection = () => {
    return (
      <List title="POST">
        <Toggle
          name="Hide Username"
          value={appearanceSettings.post.hideUserName}
        />
        <Toggle
          name="Hide Community Name"
          value={appearanceSettings.post.hideCommunityName}
        />
      </List>
    );
  };

  const FeedSection = () => {
    return (
      <List title="FEED">
        <Toggle
          name="Hide Username"
          value={appearanceSettings.feed.hideUserName}
        />
        <Toggle
          name="Hide Community Name"
          value={appearanceSettings.feed.hideCommunityName}
        />
        <ListSelect
          name="Post Size"
          selected={appearanceSettings.feed.postSize}
        />
      </List>
    );
  };

  return (
    <View style={styles.container}>
      <ThemeSection />
      <PostSection />
      <FeedSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flex: 1,
  },
  title: {
    marginTop: 20,
    fontSize: 15,
    width: "84%",
    marginBottom: 3,
  },
  innerContainer: {
    width: "90%",
    borderRadius: 13,

    overflow: "hidden",
  },
});
