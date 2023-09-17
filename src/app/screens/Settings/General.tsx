import React, { FC } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";

import { Form } from "@/common/Form/Form";
import { FormSelect } from "@/common/Form/FormSelect";
import { FormToggle } from "@/common/Form/FormToggle";
import { View } from "@/common/View";
import { RootState } from "@/store/store";

type GeneralProps = object;

export const General: FC<GeneralProps> = (props) => {
  const generalSettings = useSelector(
    (state: RootState) => state.settings.currentSettings.General,
  );

  const FeedSection = () => {
    return (
      <Form title="FEED" description="Hello there">
        <FormSelect name="Feed Type" selected={generalSettings.feed.feedType} />
        <FormSelect name="Feed Sort" selected={generalSettings.feed.feedSort} />
        <FormToggle
          name="Hide Read Posts"
          value={generalSettings.feed.hideReadPosts}
        />
        <FormToggle name="Allow NSFW" value={generalSettings.feed.allowNSFW} />
        <FormToggle name="Blur NSFW" value={generalSettings.feed.blurNSFW} />
      </Form>
    );
  };

  const PostSection = () => {
    return (
      <Form title="POST">
        <FormToggle name="Haptics" value={generalSettings.haptics.haptics} />
      </Form>
    );
  };

  const CommentSection = () => {
    return (
      <Form title="COMMENTS">
        <FormSelect
          name="Comment Sort"
          selected={generalSettings.comments.commentSort}
        />
        <FormToggle
          name="Tap to Collapse"
          value={generalSettings.comments.tapToCollapse}
        />
      </Form>
    );
  };

  const CommunitySection = () => {
    return (
      <Form title="COMMUNITY">
        <FormSelect
          name="Community Sort"
          selected={generalSettings.community.communitySort}
        />
      </Form>
    );
  };

  const HapticsSection = () => {
    return (
      <Form title="HAPTICS">
        <FormToggle name="Haptics" value={generalSettings.haptics.haptics} />
      </Form>
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
