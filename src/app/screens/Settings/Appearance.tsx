import React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Form } from "@/common/Form/Form";
import { FormSelect } from "@/common/Form/FormSelect";
import { FormToggle } from "@/common/Form/FormToggle";
import { View } from "@/common/View";
import { RootState } from "@/store/store";

export const Appearance = () => {
  const appearanceSettings = useSelector(
    (state: RootState) => state.settings.currentSettings.Appearance,
  );

  const ThemeSection = () => {
    return (
      <Form title="THEME">
        <FormSelect name="Dark Mode" selected={appearanceSettings.theme} />
      </Form>
    );
  };

  const PostSection = () => {
    return (
      <Form title="POST">
        <FormToggle
          name="Hide Username"
          value={appearanceSettings.post.hideUserName}
        />
        <FormToggle
          name="Hide Community Name"
          value={appearanceSettings.post.hideCommunityName}
        />
      </Form>
    );
  };

  const FeedSection = () => {
    return (
      <Form title="FEED">
        <FormToggle
          name="Hide Username"
          value={appearanceSettings.feed.hideUserName}
        />
        <FormToggle
          name="Hide Community Name"
          value={appearanceSettings.feed.hideCommunityName}
        />
        <FormSelect
          name="Post Size"
          selected={appearanceSettings.feed.postSize}
        />
      </Form>
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
    paddingBottom: 20,
  },
});
