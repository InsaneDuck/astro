import React from "react";

import { List } from "@/app/components/List/List";
import { ListText } from "@/app/components/List/ListText";
import { View } from "@/common/View";

export const Filters = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <List
        title="KEYWORDS"
        description="Block any post from appearing on your feed by certain words in their title"
      >
        <ListText name="keywords" />
      </List>
      <List title="COMMUNITIES">
        <ListText name="Communities" />
      </List>
      <List title="USERS">
        <ListText name="Users" />
      </List>
    </View>
  );
};
