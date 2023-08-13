import React, { FC } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { List } from "@/app/components/List/List";
import { ListSelect } from "@/app/components/List/ListSelect";
import { Toggle } from "@/app/components/List/Toggle";
import { View } from "@/common/View";
import { RootState } from "@/store/store";

type GeneralProps = object;

export const General: FC<GeneralProps> = (props) => {
  const generalSettings = useSelector(
    (state: RootState) => state.settings.defaultSettings.General,
  );

  const FeedSection = () => {
    return (
      <List title="FEED" description="Hello there">
        <ListSelect name="Feed Type" selected={generalSettings.feed.feedType} />
        <ListSelect name="Feed Sort" selected={generalSettings.feed.feedSort} />
        <Toggle
          name="Hide Read Posts"
          value={generalSettings.feed.hideReadPosts}
        />
        <Toggle name="Allow NSFW" value={generalSettings.feed.allowNSFW} />
        <Toggle name="Blur NSFW" value={generalSettings.feed.blurNSFW} />
      </List>
    );
  };

  const PostSection = () => {
    return (
      <List title="POST">
        <Toggle name="Haptics" value={generalSettings.haptics.haptics} />
      </List>
    );
  };

  const CommentSection = () => {
    return (
      <List title="COMMENTS">
        <ListSelect
          name="Comment Sort"
          selected={generalSettings.comments.commentSort}
        />
        <Toggle
          name="Tap to Collapse"
          value={generalSettings.comments.tapToCollapse}
        />
      </List>
    );
  };

  const CommunitySection = () => {
    return (
      <List title="COMMUNITY">
        <ListSelect
          name="Community Sort"
          selected={generalSettings.community.communitySort}
        />
      </List>
    );
  };

  const HapticsSection = () => {
    return (
      <List title="HAPTICS">
        <Toggle name="Haptics" value={generalSettings.haptics.haptics} />
      </List>
    );
  };

  return (
    <ScrollView>
      <View style={{ alignItems: "center", paddingBottom: 20 }}>
        <FeedSection />
        <PostSection />
        <CommentSection />
        <CommunitySection />
        <HapticsSection />
      </View>
    </ScrollView>
  );
};
