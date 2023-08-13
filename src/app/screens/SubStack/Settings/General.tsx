import React, { FC } from "react";
import { ScrollView } from "react-native";

import { List } from "@/app/components/List/List";
import { ListSelect } from "@/app/components/List/ListSelect";
import { Toggle } from "@/app/components/List/Toggle";
import { View } from "@/common/View";

type GeneralProps = object;

export const General: FC<GeneralProps> = (props) => {
  const Sorting = () => {
    return (
      <>
        <List title="FEED" description="Hello there">
          <ListSelect name="Feed Type" selected="Subscribed" />
          <ListSelect name="Feed Sort" selected="Active" />
          <Toggle name="Hide Read Posts" />
          <Toggle name="Allow NSFW" />
          <Toggle name="Blur NSFW" />
        </List>
        <List title="POST">
          <Toggle name="Haptics" />
        </List>
        <List title="COMMENTS">
          <ListSelect name="Comment Sort" selected="Hot" />
          <Toggle name="Tap to Collapse" />
        </List>
        <List title="COMMUNITY">
          <ListSelect name="Community Sort" selected="Active" />
        </List>
        <List title="HAPTICS">
          <Toggle name="Haptics" />
        </List>
      </>
    );
  };

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Sorting />
      </View>
    </ScrollView>
  );
};
