import React, { FC } from "react";
import { ScrollView } from "react-native";

import { List } from "@/app/components/List/List";
import { Select } from "@/app/components/List/Select";
import { TextItem } from "@/app/components/List/TextItem";
import { Toggle } from "@/app/components/List/Toggle";
import { View } from "@/common/View";

type GeneralProps = object;

export const General: FC<GeneralProps> = (props) => {
  const Sorting = () => {
    return (
      <>
        <List title="FEED" description="Hello there">
          <TextItem name="Feed Type" />
          <Select name="Feed Sort" />
          <Toggle name="Hide Read Posts" />
          <Toggle name="Allow NSFW" />
          <Toggle name="Blur NSFW" />
        </List>
        <List title="POST">
          <Toggle name="Haptics" />
        </List>
        <List title="COMMENTS">
          <Select name="Comment Sort" />
          <Toggle name="Tap to Collapse" />
        </List>
        <List title="COMMUNITY">
          <Select name="Community Sort" />
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
