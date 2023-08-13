import React from "react";

import { List } from "@/app/components/List/List";
import { ListText } from "@/app/components/List/ListText";
import { View } from "@/common/View";

export const About = () => {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <List>
        <ListText name="Version" />
        <ListText name="Github" />
        <ListText name="License" />
        <ListText name="Acknowledgements" />
        <ListText name="Terms of Use" />
      </List>
    </View>
  );
};
